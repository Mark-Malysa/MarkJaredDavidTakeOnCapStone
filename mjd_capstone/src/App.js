//import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import './App.css';
import { Container } from './Container';
import NavBar from "./NavBar"
import 'materialize-css/dist/css/materialize.min.css';


let carList = [];
let edits = [];

class App extends Component{
  render() {

    const handleDelete = (car) => {
      for(var i = 0; i < carList.length; i++){ 
        if (carList[i] === car) { 
            carList.splice(i, 1); 
        }
      } 
      let edit = {
        type: "Delete Car",
        key: car.key,
        make_model: car.make_model,
        stockNum: car.stockNum,
        newSpot: "N/A",
        oldSpot: car.newSpot,
        time: Date().toLocaleString()
      };
      edits.unshift(edit)
      this.forceUpdate();
    }


    const addCar = (event) => {
      event.preventDefault(event);
      //carList.push({make_model:event.target.make_model.value, vin:parseInt(event.target.vin.value), location:event.target.location.value});
      let edit = {
        type: "New Car",
        key: event.target.vin.value,
        make_model: event.target.make_model.value,
        stockNum: event.target.stockNumber.value,
        newSpot: event.target.location.value,
        oldSpot: "N/A",
        time: Date().toLocaleString()
      };
      carList.push(edit);
      edits.unshift(edit);
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
            <th>Vin</th>
            <th>Stock Number</th>
            <th>Location</th>
            <th></th>
          </tr>
          {carList.map((car =>
          
          <tr key= {car.key}>
            <td>
              <button onClick={() => handleDelete(car)}>Delete Car</button>
            </td>
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
