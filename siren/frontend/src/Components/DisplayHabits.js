import React, { Component } from 'react';
import DeleteHabit from './DeleteHabit';
import '../styles/DisplayGoals.css'
import ProgressBar from './ProgressBar';

class DisplayHabits extends Component {
    
    render() {
        return (
            <div className='goals'>
                {this.props.habits.map((item, idx) =>
                    <div className='oneGoal' key={idx}> 
                        <div> 
                            <h4>{item.habit}</h4><br></br>
                            {/* <h4>Completed: {item.progress}%</h4><br></br> */}
                            <ProgressBar id={item.id}/><br></br>
                            <DeleteHabit id={item.id}/>
                        </div>
                    </div>) }   
            </div>)
    }
}

export default DisplayHabits
