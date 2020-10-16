import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Register extends Component {

    state = {
        username: "",
        password: "",
    }
    
    onSubmit = e => {
        e.preventDefault();
        
    }
    
    render() {
        

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Register</legend>
                        <p>
                            <label htmlFor="username">Username </label>
                            <input
                            type="text" id="username"
                            onChange={e => this.setState({username: e.target.value})} />
                        </p>
                        <p>
                            <label htmlFor="password">Password </label>
                            <input
                            type="password" id="password"
                            onChange={e => this.setState({password: e.target.value})} />
                        </p>
                        <p>
                            <button type="submit">Register</button>
                        </p>

                        <p>
                            Already have an account? <Link to="/">Login</Link>
                        </p>
                    </fieldset>
                </form>
                
            </div>
        )
    }
}

export default Register;






