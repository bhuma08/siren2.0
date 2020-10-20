import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { logout } from '../Actions/Auth'
import '../styles/Logout.css'


class Logout extends Component {

    static propTypes ={
        AuthReducer: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {

        const { user, isAuthenticated } = this.props.AuthReducer

        return (
            <div>
                {isAuthenticated ? <button onClick={this.props.logout} className ="waves-effect waves-light btn logout-btn">Logout</button> : <h1></h1>}    
            </div>
        )
    }
}

const mSTP = (state) =>({
    AuthReducer: state.AuthReducer
})

export default connect(mSTP, { logout })(Logout)
