import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { register } from '../Actions/Auth';
import '../styles/Register.css'

class Register extends Component {

    state = {
        username: "",
        email:'',
        password: "",
        password2: '',
    }

    static propTypes ={
        register: PropTypes.func.isRequired,
    }

    
    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;

        if (password !== password2) {
            alert("Passwords do not match")
        } else if (username == '' || email == '' || password==''){
            alert("Please provide all the details")
        } else {
            const newUser = {
                username,
                password,
            };
            this.props.register(newUser);

            e.target.reset();
        
            alert("You have successfully registered!")
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='register-form'>
                    <fieldset>
                        <legend className='register'>Register</legend>
                        <div className="input-field col s6">
                       
                            <label className='register'>Username </label>
                            <input type="text" id="user" className="validate"
                            onChange={e => this.setState({username: e.target.value})} />
                        </div>

                        <div className="input-field col s6">
                            <label className='register'>Email </label>
                            <input type="text" id="email" className="validate"
                            onChange={e => this.setState({email: e.target.value})} />
                        </div>

                        <div className="input-field col s6">
                            <label className='register'>Password </label>
                            <input type="password" id="pass" className="validate"
                            onChange={e => this.setState({password: e.target.value})} />
                        </div>

                        <div className="input-field col s6">
                            <label className='register'>Confirm Password </label>
                            <input type="password" id="pass2" className="validate"
                            onChange={e => this.setState({password2: e.target.value})} />
                        </div>
                            <button className ="waves-effect waves-light btn register-btn register" type="submit">Register</button>
                      
                    </fieldset>
                </form>
                
            </div>
        )
    }
}
  
export default connect(null, { register })(Register);






