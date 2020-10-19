import React, { Component } from 'react'
import Logout from '../Components/Logout'
import Goals from '../Components/Goals'
import NewGoals from '../Components/NewGoals'

class Home extends Component {
    render() {
        return (
            <div>
                <Logout/>
                <h1>Welcome to your Goals</h1>
                <Goals/>
                <NewGoals/>
                
            </div>
        )
    }
}

export default Home
