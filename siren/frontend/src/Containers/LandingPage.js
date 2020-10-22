import React, { Component } from 'react'
import Login from '../Components/Login';
import Register from '../Components/Register';
import '../styles/LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div className='container'>

                <div className='loginAndRegister'>
                    <Login/>
                    <h4 className='OR'>OR</h4>
                    <Register/>
                </div>

                <div className='intro'>
                    <h3 className="animate__animated animate__slideInDown" >Siren</h3>
                    <p>Create your new goals and keep track of them.</p>
                    <p> Set deadlines to motivate you to accomplish your goals</p>
                </div>

                
            </div>
        )
    }
}

export default LandingPage;
