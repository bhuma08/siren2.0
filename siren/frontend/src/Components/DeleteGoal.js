import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeleteGoal extends Component {

    fetchData=()=>{
        console.log('new data shown')
    }

    handleClick = e =>{
        e.preventDefault();

        const token = this.props.token 

        const options ={
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization' : `Token ${token}`
            }
        }

        fetch(`http://127.0.0.1:8000/api/${this.props.id}/`, options)
        .then(this.fetchData())
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Delete</button>
                
            </div>
        )
    }
}

const mSTP = state =>({
    token: state.AuthReducer.token,
})

export default connect(mSTP)(DeleteGoal);
