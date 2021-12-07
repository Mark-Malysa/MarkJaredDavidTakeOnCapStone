import React from 'react';
import map from './prototype_map.png';
import './map.css'
import Navbar from './NavBar.js';

function ParkingMap(props) {
  return (
    <div>
    <div>
      <Navbar edits={props.edits}/>
    </div>
    <div>
      <img src={map} classname="mapImage" alt="Map"></img>
    </div>
    </div>
  );
}
 
export default ParkingMap;