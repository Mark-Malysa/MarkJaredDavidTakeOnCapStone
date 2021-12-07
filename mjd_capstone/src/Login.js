import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from "./App"

class Login extends Component{
    render() {
        const checkLogin = (event) => {
            ReactDOM.render(
              <App/>,
              document.getElementById('root')
            );
            event.preventDefault(event)
        }

        return(
            <form onSubmit={checkLogin}>
                <label>
                    <input type="email" name="username" placeholder="Username" />
                </label>
                <label>
                    <input type="password" name="password" placeholder="Password"/>
                </label>

                <input type="submit" value="Submit" />
                </form>
        );
    }
}
export default Login