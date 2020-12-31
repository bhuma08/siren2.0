import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewHabitsForm extends Component {

    state = { 
        habit:'',
        frequency: '',
        username:''
    }

    componentDidMount(){
        this.setState({ username: this.props.username })
    }

    update = e => {
        e.preventDefault()

        this.props.addHabit(this.state.habit);
        this.props.addFrequency(this.state.frequency);
        this.props.addUsername(this.state.username)

        if(this.state.habit=="" || this.state.frequency=="" || !isNaN(this.state.frequency) == false){
            alert("Please fill all the sections in the form correctly.")
            console.log(typeof this.state.frequency)
        } else {

            alert("You have successfully created a daily habit! :)")
            //post to api
            const token = this.props.token 

            const data = {
                habit : this.state.habit,
                frequency : this.state.frequency,
                username: this.state.username
            }
            console.log(data)

            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization' : `Token ${token}`
                }
            }
        
            fetch(`http://127.0.0.1:8000/api/habits/`, options)
                .then(r => r.json())
                .catch(console.warn) 
                .then(window.location.reload(false)) 

            //Reset the form
            // this.setState({
            //     habit: "",
            //     frequency : "",
            //     username:''
            // })   
        }    
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label><h4>What Daily Habit do I want to track?</h4></label>
                        <input type='text' name='goal' placeholder='I would like to track my...' onChange={e => this.setState({habit: e.target.value})} value={this.state.habit}></input><br></br>
                    </div>

                    <div>
                        <label><h4>How many times a day would I like to track your habit?</h4></label><br></br>

                        <input type='text' name='frequency' placeholder='Write a number between 1-10' onChange={e => this.setState({frequency: e.target.value})} value={this.state.frequency}></input><br></br>
                
                    </div>

                    <div>
                        <input type='submit' value='create' className ="waves-effect waves-light btn create-btn" onClick={this.update}></input>
                    </div>   
                </form>    
            </div>
        )
    }
}

const mSTP = state =>({
    token: state.AuthReducer.token,
    username: state.AuthReducer.user.id
})

const mapsDispatchToProps = dispatch =>({
    addHabit: habit => dispatch({ type: "ADD_HABIT", payload: habit}),
    addFrequency: frequency => dispatch({ type: 'ADD_FREQUENCY', payload: frequency}),
    addUsername: id => dispatch({ type: 'ADD_USERNAME', payload:id })
})

export default connect(mSTP, mapsDispatchToProps)(NewHabitsForm);
