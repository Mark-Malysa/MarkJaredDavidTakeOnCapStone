//import Button from 'react-bootstrap/Button';
import React, { createFactory } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Map from './Map';
import { Container } from './Container';
import ReactTable from 'react-table';

function App() {
  const carList = [{make_model:'Audi A4 (2012)', vin:235437353, location:'B6'}];
  return (
    <div className="App">
      {/* <table>
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

      </table> */}
      <table>
        <tr>
          <th>Make/Model</th>
          <th>Location</th>
          <th>Vin</th>
        </tr>
        {carList.map((car =>
        <tr>
          <th>{car.make_model}</th>
          <th>{car.location}</th>
          <th>{car.vin}</th>
        </tr>
        ))}
      </table>


<Container triggerText={"Add Car"} onSubmit={addCar} />

<button>Delete Car</button>

<button onClick= {openMap}>open Map</button>

    </div>
  );
}

const addCar = (event) => {
  event.preventDefault(event);
  const newCar = {make_model:event.target.make_model.value, vin:parseInt(event.target.vin.value), location:event.target.vin.value};
  carList.push(newCar);
};

function openMap(){
  ReactDOM.render(
    <Map/>,
    document.getElementById('root')
  );
}

export default App;
