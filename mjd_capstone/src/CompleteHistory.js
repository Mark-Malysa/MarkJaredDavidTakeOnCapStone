import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from "./NavBar"

const CompleteHistory = () => {
    return (  
        <div>
        <div>
        <NavBar/>
        </div>
        <div className="App">
            
            <table>
            <tr>
                <th>Make/Model</th>
                <th>Vin</th>
                <th>Current Location</th>
                <th>Moved From</th>
                <th>Moved By</th>
                <th>Time Moved</th>
            </tr>
            {carList.map((car =>
            <tr>
                <th>{car.make_model}</th>
                <th>{car.location}</th>
                <th>{car.vin}</th>
                <th><button class="listedButton">Show on Map</button></th>
            </tr>
            ))}
            </table>

            <button>Edit History (only on admin view)</button>


        </div>
        </div>
          
    );
}
 
export default CompleteHistory;