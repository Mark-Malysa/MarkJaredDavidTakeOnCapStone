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
class App extends Component{
  render() {

    const addCar = (event) => {
      event.preventDefault(event);  
      //carList.push({make_model:event.target.make_model.value, vin:parseInt(event.target.vin.value), location:event.target.location.value});
      this.forceUpdate();
      carmap.set(event.target.vin.value, {make_model:event.target.make_model.value, location:event.target.location.value});
      console.log(carmap);
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
          {carmap.forEach((value) => {
          <tr>
            <td><ActionMenu/></td>
            <td>{value.make_model}</td>
            <td>{value.location}</td>
            <td>234543</td>
            <td><button class="listedButton">Show on Map</button></td>
          </tr>
  })}
        </table>
  
        <Container triggerText={"Add Car"} onSubmit={addCar} />

<<<<<<< HEAD
        <Container triggerText={"Delete Car"} onsubmit={deleteCar}/>

        <Container triggerText={"Open Map"} showModal={openMap} />
  
=======
        <button class="addDelete">Delete Car</button>

        <button class="openMap" onClick= {openMap}>Open Map</button>
>>>>>>> 2af65c5ff892325f4cc1a2787ac5c0764fc5ef94

      </div>
      </div>
    );
  }
}

export default App;
