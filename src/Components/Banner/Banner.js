import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className='title'>Movie Name</h1>
                <div className="banner-buttons">
                    <button className='button'>Play</button>
                    <button className='button'>Playlist</button>
                </div>
                <h1 className="description">Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit. 
                Reprehenderit quia dolore non? 
                Cupiditate voluptate molestiae optio amet consectetur distinctio maiores?</h1>
            </div>
            <div className="fade">
            </div>
        </div>
    )
}

export default Banner