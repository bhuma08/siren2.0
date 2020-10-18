import React, { Component } from 'react'
import { connect } from 'react-redux';

class NewGoalsForm extends Component {

    state = { 
        goal : "",
        actionOne : "",
        actionTwo :"",
        actionThree:"",
        actionFour:"",
        start_date:"",
        end_date:'',
        username:''
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
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Goals: </label>
                        <input type='text' placeholder='What is you goal?' onChange={e => this.setState({goal: e.target.value})} value={this.state.goal}></input><br></br>
                    </div>

                    <div>
                        <label>What actions are you going to take? </label><br></br>
                        <input type='text' placeholder='One' onChange={e => this.setState({actionOne: e.target.value})} value={this.state.actionOne}></input><br></br>
                        <input type='text' placeholder='Two' onChange={e => this.setState({actionTwo: e.target.value})} value={this.state.actionTwo}></input><br></br>
                        <input type='text' placeholder='Three' onChange={e => this.setState({actionThree: e.target.value})} value={this.state.actionThree}></input><br></br>
                        <input type='text' placeholder='Four' onChange={e => this.setState({actionFour: e.target.value})}value={this.state.actionFour}></input><br></br>
                    </div>

                    <div>
                        <label>Start date and time: </label>
                        <input type='text' placeholder='YYYY-MM-DD HH-MM' onChange={e => this.setState({start_date: e.target.value})} value={this.state.start_date}></input><br></br>
                    </div>

                    <div>
                        <label>End date and time: </label>
                        <input type='text' placeholder='YYYY-MM-DD HH-MM' onChange={e => this.setState({end_date: e.target.value})} value={this.state.end_date}></input><br></br>
                    </div> 

                    <div>
                        <input type='submit' value='create' onClick={this.update}></input>
                    </div>   
                </form>    
            </div>
        )
    }
}

const mapsDispatchToProps = dispatch =>({
    addGoal: goal => dispatch({ type: "ADD_GOAL", payload: goal}),
    addActionOne: actionOne => dispatch({ type: 'ADD_ACTIONONE', payload: actionOne}),
    addActionTwo: actionTwo => dispatch({ type: 'ADD_ACTIONTWO', payload: actionTwo}),
    addActionThree: actionThree => dispatch({ type: 'ADD_ACTIONTHREE', payload: actionThree}),
    addActionFour: actionFour => dispatch({ type: 'ADD_ACTIONFOUR', payload: actionFour}),
    addStartDate: start_date => dispatch({ type: 'ADD_START', payload: start_date}),
    addEndDate: end_date => dispatch({ type: 'ADD_END', payload: end_date}),
})

export default connect(null, mapsDispatchToProps)(NewGoalsForm);
