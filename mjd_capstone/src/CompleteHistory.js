import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from "./NavBar"

let editList = [{make_model:"Audi A4 (2004)", vin:2348723965623, old:"B6", new:"D4", time:"16:34"}];

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
                <th>VIN</th>
                <th>Moved From</th>
                <th>Moved To</th>
                <th>Moved At</th>
            </tr>
            {editList.map((car =>
            <tr>
                <th>{car.make_model}</th>
                <th>{car.vin}</th>
                <th>{car.old}</th>
                <th>{car.new}</th>
                <th>{car.time}</th>
            </tr>
            ))}
            </table>

        </div>
        </div>
          
    );
}
 
export default CompleteHistory;