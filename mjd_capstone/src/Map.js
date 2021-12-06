import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import map from './prototype_map.png';
import './map.css'
import Navbar from './NavBar.js';

function Map() {
  return (
    <div>
      <Navbar/>
      <img src={map} classname="mapImage" alt="Map"></img>
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