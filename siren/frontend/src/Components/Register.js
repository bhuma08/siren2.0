import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { register } from '../Actions/Auth'

class Register extends Component {

    state = {
        username: "",
        password: "",
        password2: '',
    }

    static propTypes ={
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    }
    
    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            alert("Passwords do not match")
        } else {
        const newUser = {
            username,
            password,
            email,
        };
        this.props.register(newUser);
        <Redirect to='/'/>
        alert("You have successfully registered! please log in")
        }

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
                            <label htmlFor="password">Confirm Password </label>
                            <input
                            type="password" id="password2"
                            onChange={e => this.setState({password2: e.target.value})} />
                        </p>
                        <p>
                            <button type="submit">Register</button>
                        </p>

                        {/* <p>
                            Already have an account? <Link to="/">Login</Link>
                        </p> */}
                    </fieldset>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.AuthReducer.isAuthenticated,
});
  
export default connect(mapStateToProps, { register })(Register);






