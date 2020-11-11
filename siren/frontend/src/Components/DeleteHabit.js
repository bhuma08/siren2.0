import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/DeleteGoal.css'

class DeleteHabit extends Component {

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

        fetch(`http://127.0.0.1:8000/api/habits/${this.props.id}/`, options)
        .then(alert('Your Daily Habit has been deleted'))
        .then(window.location.reload(false))    
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} className ="waves-effect waves-light btn">x</button>
                
            </div>
        )
    }
}

const mSTP = state =>({
    token: state.AuthReducer.token,
    username: state.AuthReducer.user.id
})

export default connect(mSTP)(DeleteHabit);
