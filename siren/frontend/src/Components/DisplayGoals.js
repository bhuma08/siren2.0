import React, { Component } from 'react';
import DeleteGoal from './DeleteGoal';

class DisplayGoals extends Component {
    
    render() {
        return (
            <div>
                {this.props.goals.map((item, idx) =>
                    <div key={idx}>
                        <p>Your Goal: {item.goal}</p>
                        <p>Actions to help you reach your goal: </p>
                        <ul>
                            <li>{item.actionOne}</li>
                            <li>{item.actionTwo}</li>
                            <li>{item.actionThree}</li>
                            <li>{item.actionFour}</li>
                        </ul>
                        <p>Start date: {item.start_time}</p>
                        <p>Deadline: {item.end_time}</p>
                        <DeleteGoal id={item.id}/>
                        <hr></hr>      
                    </div>) }   
            </div>
        )
    }
}

export default DisplayGoals
