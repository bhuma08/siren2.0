import React, { Component } from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import DisplayGoals from './DisplayGoals';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class Goals extends Component {

    state= {
        id : '',
        goals : [],
        openModal : false
    }

    componentDidMount(){
        const token = this.props.token

        const config = {
            headers :{
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`
            }
        }
        
        axios.get('http://127.0.0.1:8000/api/user/', config)
            .then((response)=> {
                this.setState({ id: response.data.id })
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    showGoals =()=>{

        this.setState({openModal : true})

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
            .then(()=>{
                if(this.state.goals.length ==0){
                    alert("No goals has been set") 
                }
            })
            .catch((error)=>{
                console.log(error);
            });
    };   

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render() {

        return (
            <div>
                <button onClick={this.showGoals}>View your Goals</button>
                <hr></hr>
                <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
                    <DisplayGoals goals={this.state.goals}/>     
                </Modal>           
            </div>
        )
    }
}

const mSTP = state =>({

    token: state.AuthReducer.token

})
export default connect(mSTP)(Goals);


