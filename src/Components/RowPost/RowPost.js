import React,{useState,useEffect}from 'react'
import { imageUrl,API_KEY} from '../../Constants/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube'
import './RowPost.css'


function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            setMovies(response.data.results)
        })
    },[])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data)
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
            else{
                console.log("ERRROR")
            }
        })
    
    }
  return (
    <div className='row'>
    <h2  className={props.isSmall?"":"head"}>{props.title}</h2>
    <div className="posters">
    
    {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="" className={props.isSmall?"smallPoster":"poster"} />
    )}
    </div>
{urlId ? <YouTube opts={opts} videoId={urlId.key}/>:""}
    </div>
    
    )
}

export default RowPost