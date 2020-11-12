import React, { Component } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import NewHabitsForm from './NewHabitsForm';

class NewHabits extends Component {

    state ={
        openModal : false
    }

    handleClick = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="btn btn-primary">Create your daily habits</button>
                <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
                    <NewHabitsForm/>
                </Modal>   
            </div>
        )
    }
}

export default NewHabits;
