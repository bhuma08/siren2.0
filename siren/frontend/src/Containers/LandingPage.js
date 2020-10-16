import React, { Component } from 'react'
import Login from '../Components/Login';
import Register from '../Components/Register';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Login/>
                OR
                <Register/>
            </div>
        )
    }
}

export default LandingPage;
