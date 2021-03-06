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
        openModal : false,
    }

    componentDidMount(){
        const token = this.props.token
        console.log(token)

        const config = {
            headers :{
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`,
            }
        }
        
        axios.get('https://siren-final-backend.herokuapp.com/api/user/', config)
            .then((response)=> {
                console.log(response)
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
                'Authorization' : `Token ${token}`,
            }
        }

        axios.get(`https://siren-final-backend.herokuapp.com/api/goals/username/${this.state.id}`, config)
            .then((response)=> {
                this.setState({ goals : response.data })
                console.log(this.state.goals)
            })
            .then(()=>{
                if(this.state.goals.length ==0){
                    alert("No goals have been set") 
                }
            })
            .catch((error)=>{
                console.log(error);
            });
        
        this.setState({openModal : true})
    };   

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render() {

        return (
            <div>
                <p>
                    <button onClick={this.showGoals} className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        View my Goals
                    </button>
                </p>

                <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
                    <DisplayGoals goals={this.state.goals}/>
                </Modal> 
                
                {/* <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <DisplayGoals goals={this.state.goals}/>    
                    </div>
                </div>       */}
            </div>
        )
    }
}

const mSTP = state =>({

    token: state.AuthReducer.token

})
export default connect(mSTP)(Goals);


