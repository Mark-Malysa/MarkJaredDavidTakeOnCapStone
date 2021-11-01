import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

function Map() {
  return (
    <div>

    <img src='src/prototype_map.png' alt="Map"></img>

    <button onClick= {closeMap}>Close map</button>
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