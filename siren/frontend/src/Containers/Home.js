import React, { Component } from 'react'
import Logout from '../Components/Logout'
import Goals from '../Components/Goals'
import Habits from '../Components/Habits'
import NewGoals from '../Components/NewGoals'
import {connect} from "react-redux";
import '../styles/Home.css'

class Home extends Component {

    render() {
        return (
            <div>
                <Logout/>
                <h1 className='welcome'>Welcome {this.props.username}</h1>
                <div className='home-grid'>

                    <div><NewGoals/></div><br></br>
                    <div><Goals/></div>

                    <div><Habits/></div>
                   
                </div>  
            </div>
        )
    }
}
const mSTP = state =>({
    
    username: state.AuthReducer.user.username
})


export default connect(mSTP)(Home);
