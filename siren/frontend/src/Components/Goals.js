import React, { Component } from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import DisplayGoals from './DisplayGoals';

class Goals extends Component {

    state= {
        id : '',
        goals : []
    }

    componentDidMount(){
        const token = this.props.token
        console.log(token)

        const config = {
            headers :{
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`
            }
        }

        axios.get('http://127.0.0.1:8000/api/user/', config)
            .then((response)=> {
                console.log(response.data.id)
                this.setState({ id: response.data.id })
                console.log(this.state.id)
            })
            .catch((error)=>{
                console.log(error);
            });



    }

    showGoals =()=>{

        console.log(this.state.id)

        const token = this.props.token

        const config = {
            headers :{
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`
            }
        }

        axios.get(`http://127.0.0.1:8000/api/username/${this.state.id}`, config)
            .then((response)=> {
                this.setState({ goals : response.data })
                console.log(this.state.goals)
            })
            .catch((error)=>{
                console.log(error);
            });



    };   




    render() {



        return (
            <div>
                <button onClick={this.showGoals}>View your Goals</button>
                {console.log(this.state.goals)}
                <DisplayGoals goals={this.state.goals}/>


                
            </div>
        )
    }
}

const mSTP = state =>({

    token: state.AuthReducer.token

})
export default connect(mSTP)(Goals);


