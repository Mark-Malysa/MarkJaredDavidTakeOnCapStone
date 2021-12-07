import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import NavBar from "./NavBar"

const CompleteHistory = (props) => {
    return (  
        <div>
        <div>
        <NavBar/>
        </div>
        <div className="App">
            
            <table>
            <tr> 
                <th>Edit Type</th>
                <th>Car Make/Model</th>
                <th>VIN</th>
                <th>Stock Number</th>
                <th>Old Location</th>
                <th>New Location</th>
                <th>Time</th>
            </tr>
            {props.edits.map((edit =>
            <tr>
                <td>{edit.type}</td>
                <td>{edit.make_model}</td>
                <td>{edit.key}</td>
                <td>{edit.stockNum}</td>
                <td>{edit.old}</td>
                <td>{edit.location}</td>
                <td>{edit.time}</td>
            </tr>
            ))}
            </table>

        </div>
        </div>
          
    );
}
 
export default CompleteHistory;