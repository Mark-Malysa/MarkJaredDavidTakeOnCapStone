import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import map from './prototype_map.png';
import './map.css'

function Map() {
  return (
    <div>

    <img src={map} classname="mapImage" alt="Map"></img>

    <button class="close "onClick= {closeMap}>Close map</button>
    </div>
  );
}

function closeMap(){
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}
 
export default Map;