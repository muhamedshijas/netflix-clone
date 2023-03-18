import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

import {actions,originals,horror,comedy,romance} from './urls'

function App() {
  
  return (
    <div>
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title="Netflix Orginals"/>
    <RowPost url={actions} title="Action Movies" isSmall/>
    <RowPost url={horror} title="Horror Movies" isSmall/>
    <RowPost url={comedy} title="Comedy Movies" isSmall/>
    <RowPost url={romance} title="Romance Movies" isSmall/>

    </div>
  );
}

export default App;
