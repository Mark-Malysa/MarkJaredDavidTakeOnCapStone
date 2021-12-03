//import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ParkingMap from './Map';
import { Container } from './Container';
import NavBar from "./NavBar"
import 'materialize-css/dist/css/materialize.min.css';
import ActionMenu from './ActionMenu'
import { Carousel } from 'materialize-css';


let carList = [];
let carmap = new Map();
carmap.set(5424562089345, {make_model:"test", location: "test"})

class App extends Component{
  render() {

    const addCar = (event) => {
      event.preventDefault(event);
      //carList.push({make_model:event.target.make_model.value, vin:parseInt(event.target.vin.value), location:event.target.location.value});
      this.forceUpdate();
      carmap.set(event.target.vin.value, {make_model:event.target.make_model.value, location:event.target.location.value});
      console.log(carmap)
      this.forceUpdate();

    };

    const deleteCar = (event) => {
      event.preventDefault(event);
      carList.clear();
      this.forceUpdate();
    };

    const openMap = (event) => {
      console.log(event);
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
            <th></th>
          </tr>
          {carmap.forEach((car, i) => {
            <tr>
            console.log('writing');
              <td><ActionMenu/></td>
              <td>{car.make_model}</td>
              <td>{car.location}</td>
              <td>{i}</td>
              <td><button class="listedButton">Show on Map</button></td>
            </tr>
          })}
        </table>

        <Container class="restOfTriggerText" triggerText={"Add Car"} onSubmit={addCar} />

        <Container class="deleteCar" triggerText={"Delete Car"} onsubmit={deleteCar}/>

        <Container class="restofTriggerText" triggerText={"Open Map"} showModal={openMap} />


      </div>
      </div>
    );
  }
}

export default App;
