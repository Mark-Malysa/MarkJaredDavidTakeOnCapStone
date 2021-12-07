//import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ParkingMap from './ParkingMap';
import { Container } from './Container';
import NavBar from "./NavBar"
import 'materialize-css/dist/css/materialize.min.css';
import ActionMenu from './ActionMenu';
import CompleteHistory from './CompleteHistory';


let carList = [];
let edits = [];

class App extends Component{
  render() {
    const addCar = (event) => {
      event.preventDefault(event);
      //carList.push({make_model:event.target.make_model.value, vin:parseInt(event.target.vin.value), location:event.target.location.value});
      let listEdit = {
        type: "New Car",
        key: event.target.vin.value,
        make_model: event.target.make_model.value,
        stockNum: event.target.stockNumber.value,
        newSpot: event.target.location.value,
        oldSpot: "N/A",
        time: Date().toLocaleString()
      };
      console.log(listEdit);
      carList.push(listEdit);
      edits.push(listEdit);
      console.log(carList);
      this.forceUpdate();

    };

    return(
      <div>
      <div>
      <NavBar edits={edits}/>
      </div>
      <div className="App">

        <table>
          <tr>
            <th>Action</th>
            <th>Make/Model</th>
            <th>Location</th>
            <th>Vin</th>
            <th>Stock Number</th>
            <th></th>
          </tr>
          {carList.map((car =>
          
          <tr key= {car.key}>
            <td><ActionMenu/></td>
            <td>{car.make_model}</td>
            <td>{car.newSpot}</td>
            <td>{car.key}</td>
            <td>{car.stockNum}</td>
            <td><button class="listedButton">Show on Map</button></td>
          </tr>
          ))}
    
        </table>

        <Container class="addCar" triggerText={"Add Car"} onSubmit={addCar} />

      </div>
      </div>
    );
  }
}

export default App;
