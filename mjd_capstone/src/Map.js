import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

function Map() {
  return (
    <div>
    <h1>hello</h1>
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