import React, { Component } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import NewGoalsForm from './NewGoalsForm';

class NewGoals extends Component {

    state ={
        openModal : false
    }

    handleClick = e =>{
        e.preventDefault()
        console.log('clicked')
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Create you goals</button>
                <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                    <NewGoalsForm/>
                </Modal>
                
            </div>
        )
    }
}

export default NewGoals
