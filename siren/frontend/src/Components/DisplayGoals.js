import React, { Component } from 'react';
import DeleteGoal from './DeleteGoal';
import '../styles/DisplayGoals.css'

class DisplayGoals extends Component {
    
    render() {
        return (
            <>
                <h3>My goals so far...</h3>

                <div className='goals'>
                    {this.props.goals.map((item, idx) =>
                        <div className='oneGoal' key={idx}>
                            <h4 className='goalsDisplay'>{item.goal}</h4>
                            <p className='goalsDisplay'>Actions to help you reach your goal: </p>
                            <ol>
                                <li className='goalsDisplay'>{item.actionOne}</li>
                                <li className='goalsDisplay'>{item.actionTwo}</li>
                                <li className='goalsDisplay'>{item.actionThree}</li>
                                <li className='goalsDisplay'>{item.actionFour}</li>
                            </ol>
                            <p className='goalsDisplay'>Start date: {item.start_time}</p>
                            <p className='goalsDisplay'>Deadline: {item.end_time}</p>     
                            <DeleteGoal id={item.id}/>
                        </div>) }   
                </div>

                
            </>
        )
    }
}

export default DisplayGoals
