import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { login } from '../Actions/Auth'

class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    static propTypes ={
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }
    
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to='/home' />
        }

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Login</legend>
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
                            <button type="submit">Login</button>
                        </p>

                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </fieldset>
                </form>
                
            </div>
        )
    }
}

const mSTP = state =>({

    isAuthenticated: state.AuthReducer.isAuthenticated

})
export default connect(mSTP, {login})(Login);





