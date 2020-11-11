import React, { Component } from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import DisplayHabits from './DisplayHabits';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class Habits extends Component {

    state= {
        habits : [],
        openModal : false
    }

    showHabits =()=>{

        const token = this.props.token

        const config = {
            headers :{
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`,
            }
        }


        axios.get(`http://127.0.0.1:8000/api/habits/username/${this.props.username}`, config)
            .then((response)=> {
                this.setState({ habits : response.data })
                console.log(this.state.habits)

            })
            .then(()=>{
                if(this.state.habits.length ==0){
                    alert("No goals has been set") 
                }
            })
            .catch((error)=>{
                console.log(error);
            });

        this.setState({openModal : true})

        console.log("show habits")

    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Authorization' : `Token ${token}`
    //         }
    //     }
    
    //     fetch(`http://127.0.0.1:8000/api/habits/username/${this.props.username}`, options)
    //         .then(r => r.json())
    //         .catch(console.warn) 
    }; 
    
    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render() {

        return (
            <div>
                <button onClick={this.showHabits} className="btn btn-primary">View your daily habits</button>
                <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
                    <DisplayHabits habits={this.state.habits}/>
                </Modal> 
            </div>
        )
    }
}

const mSTP = state =>({

    token: state.AuthReducer.token,
    username: state.AuthReducer.user.id

})
export default connect(mSTP)(Habits);


