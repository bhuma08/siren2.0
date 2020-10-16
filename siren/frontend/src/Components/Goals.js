import React, { Component } from 'react';
import {connect} from "react-redux";
import axios from 'axios';

class Goals extends Component {

    showGoals =()=>{
        const token = this.props.token

        const config = {
            headers :{
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`
            }
        }

        console.log(token)

        axios.get('http://127.0.0.1:8000/api/user/', config)
            .then(function (response) {
                console.log(response.data.id);
            })
              .catch(function (error) {
                console.log(error);
            });

        
    };   




    render() {
        return (
            <div>
                <button onClick={this.showGoals}>View your Goals</button>
                
            </div>
        )
    }
}

const mSTP = state =>({

    token: state.AuthReducer.token

})
export default connect(mSTP)(Goals);


