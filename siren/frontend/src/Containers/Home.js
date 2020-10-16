import React, { Component } from 'react'
import Logout from '../Components/Logout'
import Goals from '../Components/Goals'

class Home extends Component {
    render() {
        return (
            <div>
                <Logout/>
                <h1>Welcome to your Goals...</h1>
                <Goals/>
                
            </div>
        )
    }
}

export default Home
