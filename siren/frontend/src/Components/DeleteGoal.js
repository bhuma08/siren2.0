import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/DeleteGoal.css'

class DeleteGoal extends Component {

    handleClick = e =>{
        e.preventDefault();

        const token = this.props.token 

        const options ={
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization' : `Token ${token}`,
            }
        }

        fetch(`https://siren-final-backend.herokuapp.com/api/${this.props.id}/`, options)
        .then(alert('Your Goals has been deleted'))
        .then(window.location.reload(false))    
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} className ="waves-effect waves-light btn delete-btn">x</button>
                
            </div>
        )
    }
}

const mSTP = state =>({
    token: state.AuthReducer.token,
    username: state.AuthReducer.user.id
})

export default connect(mSTP)(DeleteGoal);
