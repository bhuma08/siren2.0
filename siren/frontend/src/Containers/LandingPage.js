import React, { Component } from 'react'
import Login from '../Components/Login';
import Register from '../Components/Register';
import '../styles/LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <>
            
                <div className='container'>

                    <div className='loginAndRegister'>
                        <Login/>
                        <h4 className='OR'>OR</h4>
                        <Register/>
                    </div>

                    <div className='intro'>
                        <h2 className="animate__animated animate__slideInDown siren" >Siren</h2><br></br>
                        Create your new Goals and keep track of them<br></br><br></br>
                        Set deadlines to motivate you to accomplish your Goals<br></br><br></br>
                        Update and track the progress of your Daily Habits <br></br><br></br>
                    </div>

                </div>

                <div className='bhuma'>by BHUMA. </div>
            
            </>
        )
    }
}

export default LandingPage;
