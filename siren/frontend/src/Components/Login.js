import React, { Component } from 'react'
import { Redirect}  from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { login } from '../Actions/Auth'
import '../styles/Login.css'
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
                <form onSubmit={this.onSubmit} className='login-form'>
                    <fieldset>
                        <legend>Login</legend>
                        <div className="input-field col s6">
                            <label htmlFor="username">Username</label>
                            <input type="text" id='username' className="validate" onChange={e => this.setState({username: e.target.value})} />
                        </div>
                        <div className="input-field col s6">
                            <label htmlFor="password">Password </label>
                            <input type="password" id="password" className="validate" onChange={e => this.setState({password: e.target.value})} />
                        </div>
                      
                        <button className ="waves-effect waves-light btn login-btn" type="submit">Login</button>   
                    </fieldset>
                </form>      
            </div>
        )
    }
}

const mSTP = state =>({

    isAuthenticated: state.AuthReducer.isAuthenticated,
    token: state.AuthReducer.token

})
export default connect(mSTP, {login})(Login);





