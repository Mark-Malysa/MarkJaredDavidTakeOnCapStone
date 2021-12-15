import React from 'react';
import map from './prototype_map.png';
import './map.css'
import Navbar from './NavBar.js';
import MyPopper from './MyPopper';

function ParkingMap(props) {

  return (
    <div>
    <div>
      <Navbar edits={props.edits}/>
    </div>
    <div className="mapImage">
      <div>
      <img id="parkingMap" src={map} alt="Map"></img>
      
      </div>
      <div id="tooltip" role="tooltip">
        My tooltip
    </div>

      </div>
      

    </div>
  );
}
 
export default ParkingMap;