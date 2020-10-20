import React, { Component } from 'react'
import Logout from '../Components/Logout'
import Goals from '../Components/Goals'
import NewGoals from '../Components/NewGoals'
import {connect} from "react-redux";

class Home extends Component {

    render() {
        return (
            <div>
                <Logout/>
                <h1>Welcome {this.props.username}</h1>
                <Goals/>
                <NewGoals/>
                
            </div>
        )
    }
}
const mSTP = state =>({
    
    username: state.AuthReducer.user.username
})


export default connect(mSTP)(Home);
