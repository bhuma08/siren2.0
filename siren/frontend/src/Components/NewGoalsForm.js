import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/NewGoalsForm.css'

class NewGoalsForm extends Component {

    state = { 
        goal : "",
        actionOne : "",
        actionTwo :"",
        actionThree:"",
        actionFour:"",
        start_date: new Date(),
        end_date: new Date(),
        username:''
    }

    componentDidMount(){
        this.setState({ username: this.props.username })
    }

    update = e => {
        e.preventDefault()

        this.props.addGoal(this.state.goal);
        this.props.addActionOne(this.state.actionOne);
        this.props.addActionTwo(this.state.actionTwo);
        this.props.addActionThree(this.state.actionThree);
        this.props.addActionFour(this.state.actionFour);
        this.props.addStartDate(this.state.start_date);
        this.props.addEndDate(this.state.end_date);
        this.props.addUsername(this.state.username)

        if(this.state.goal == '' || this.state.actionOne == '' || this.state.actionTwo=='' || this.state.actionThree=='' || this.state.actionFour=='' || this.state.start_date==''|| this.state.end_date==''){
            alert('Please fill all the sections in the form.')
        } else {

           alert('You have successfully created a goal!')

            //post to api
            const token = this.props.token 

            const data = {
                goal : this.state.goal,
                actionOne : this.state.actionOne,
                actionTwo : this.state.actionTwo,
                actionThree: this.state.actionThree,
                actionFour: this.state.actionFour,
                start_time: this.state.start_date,
                end_time: this.state.end_date,
                username: this.state.username
            }

            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization' : `Token ${token}`
                }
            }
        
            fetch(`https://siren-final-backend.herokuapp.com/api/`, options)
                .then(r => r.json())
                .catch(console.warn) 

            //Reset the form
            this.setState({
                goal: "",
                actionOne : "",
                actionTwo :"",
                actionThree:"",
                actionFour:"",
                start_date:"",
                end_date:'',
                username:''
            })       
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label><h4>Goal:</h4></label>
                        <input type='text' name='goal' placeholder='What is you goal?' onChange={e => this.setState({goal: e.target.value})} value={this.state.goal}></input><br></br>
                    </div>

                    <div>
                        <label><h4>What actions are you going to take?</h4></label><br></br>
                        <input type='text' name='one' placeholder='One' onChange={e => this.setState({actionOne: e.target.value})} value={this.state.actionOne}></input><br></br>
                        <input type='text'name='two' placeholder='Two' onChange={e => this.setState({actionTwo: e.target.value})} value={this.state.actionTwo}></input><br></br>
                        <input type='text' name='three' placeholder='Three' onChange={e => this.setState({actionThree: e.target.value})} value={this.state.actionThree}></input><br></br>
                        <input type='text' name='four' placeholder='Four' onChange={e => this.setState({actionFour: e.target.value})}value={this.state.actionFour}></input><br></br>
                    </div>

                    <div className='Dates'>

                        <div>
                            <label><h4>Start date:</h4></label>
                            <Calendar onChange={start_date => this.setState({ start_date })} value={this.state.date}/>
                        </div>

                        <div>
                            <label><h4>End date:</h4></label>
                            <Calendar onChange={end_date => this.setState({ end_date })} value={this.state.date}/>
                        </div>

                    </div><br></br>

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
    addGoal: goal => dispatch({ type: "ADD_GOAL", payload: goal}),
    addActionOne: actionOne => dispatch({ type: 'ADD_ACTIONONE', payload: actionOne}),
    addActionTwo: actionTwo => dispatch({ type: 'ADD_ACTIONTWO', payload: actionTwo}),
    addActionThree: actionThree => dispatch({ type: 'ADD_ACTIONTHREE', payload: actionThree}),
    addActionFour: actionFour => dispatch({ type: 'ADD_ACTIONFOUR', payload: actionFour}),
    addStartDate: start_date => dispatch({ type: 'ADD_START', payload: start_date}),
    addEndDate: end_date => dispatch({ type: 'ADD_END', payload: end_date}),
    addUsername: id => dispatch({ type: 'ADD_USERNAME', payload:id })
})

export default connect(mSTP, mapsDispatchToProps)(NewGoalsForm);
