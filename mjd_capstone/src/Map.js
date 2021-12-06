import React from 'react';
import map from './prototype_map.png';
import './map.css'
import Navbar from './NavBar.js';

function Map() {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <img src={map} classname="mapImage" alt="Map"></img>
    </div>
    </div>
  );
}
 
export default Map;