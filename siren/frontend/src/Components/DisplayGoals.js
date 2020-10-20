import React, { Component } from 'react';
import DeleteGoal from './DeleteGoal';
import '../styles/DisplayGoals.css'

class DisplayGoals extends Component {
    
    render() {
        return (
            <div className='goals'>
                {this.props.goals.map((item, idx) =>
                    <div className='oneGoal' key={idx}>
                        <DeleteGoal id={item.id}/>
                        <p>{item.goal}</p>
                        <p>Actions to help you reach your goal: </p>
                        <ol>
                            <li>{item.actionOne}</li>
                            <li>{item.actionTwo}</li>
                            <li>{item.actionThree}</li>
                            <li>{item.actionFour}</li>
                        </ol>
                        <p>Start date: {item.start_time}</p>
                        <p>Deadline: {item.end_time}</p>   
                    </div>) }   
            </div>
        )
    }
}

export default DisplayGoals
