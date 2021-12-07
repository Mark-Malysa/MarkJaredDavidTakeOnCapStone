//import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ParkingMap from './Map';
import { Container } from './Container';
import NavBar from "./NavBar"
import 'materialize-css/dist/css/materialize.min.css';
import ActionMenu from './ActionMenu'


let carList = [];
let carmap = new Map();
carmap.set(5424562089345, {make_model:"test", location: "test"})

class App extends Component{
  render(user) {

    const addCar = (event) => {
      event.preventDefault(event);
      //carList.push({make_model:event.target.make_model.value, vin:parseInt(event.target.vin.value), location:event.target.location.value});
      let newCar = {
        key: event.target.vin.value,
        make_model: event.target.make_model.value,
        location:event.target.location.value,
        stockNum: event.target.stockNumber.value
      };
      console.log(newCar);
      carList.push(newCar);
      console.log(carList);
      this.forceUpdate();

    };

    const deleteCar = (event) => {
      event.preventDefault(event);
      carList.clear();
      this.forceUpdate();
    };

    const openMap = (event) => {
      event.preventDefault(event);
      ReactDOM.render(
        <ParkingMap/>,
        document.getElementById('root')
      );
    }

    return(
      <div>
      <div>
      <NavBar/>
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
            <td>Action Menu</td>
            <td>{car.make_model}</td>
            <td>{car.location}</td>
            <td>{car.key}</td>
            <td>{car.stockNum}</td>
            <td><button class="listedButton">Show on Map</button></td>
          </tr>
          ))}
    
        </table>

        <Container class="addCar" triggerText={"Add Car"} onSubmit={addCar} />

        <Container class="deleteCar" triggerText={"Clear List"} onsubmit={deleteCar}/>

        <Container class="restofTriggerText" triggerText={"Open Map"} showModal={openMap} />

      </div>
      </div>
    );
  }
}

export default App;
