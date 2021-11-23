//import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Map from './Map';
import { Container } from './Container';
import NavBar from "./NavBar"

let carList = [];

class App extends Component{
  render() {

    const addCar = (event) => {
      event.preventDefault(event);  
      carList.push({make_model:event.target.make_model.value, vin:parseInt(event.target.vin.value), location:event.target.location.value});
      this.forceUpdate();
    };
    
    const openMap = () => {
      ReactDOM.render(
        <Map/>,
        document.getElementById('root')
      );
    }

    return(
      <div className="App">
        <NavBar/>
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
}

export default App;
