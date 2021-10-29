//import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <table>
  <tr>
    <th>Model/Year</th>
    <th>Location</th>
    <th>Vin</th>
    
  </tr>
  <tr>
    <td>Audi A4 (2012)</td>
    <td>Onsite: 15</td>
    <td>123456789123456789</td>
    <td><button>Edit</button></td>
  </tr>
  <tr>
  <td>Audi Q7 (2012)</td>
    <td>Onsite: 10</td>
    <td>123456789123456789</td>
    <td><button>Edit</button></td>
  </tr>

  <tr>

  <td>Audi s4 (2014)</td>
    <td>OffSite</td>
    <td>123456789123456789</td>
    <td><button>Edit</button></td>
  </tr>
</table>


<button>Add Car</button>
<button>Delete Car</button>

<button onClick= {checkingButton}>open Map</button>

    </div>
  );
}

function checkingButton(){
  ReactDOM.render(
    <Map/>,
    document.getElementById('root')
  );
}

export default App;
