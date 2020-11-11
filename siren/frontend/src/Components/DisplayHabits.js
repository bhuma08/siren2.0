import React, { Component } from 'react';
import '../styles/DisplayGoals.css'

class DisplayHabits extends Component {
    
    render() {
        return (
            <div className='goals'>
                {this.props.habits.map((item, idx) =>
                    <div className='oneGoal' key={idx}> 

                        <div> 
                            <h4>{item.habit}</h4><br></br>
                            <h4>Completed: {item.progress}%</h4><br></br>
                            
                        </div>
                    </div>) }   
            </div>)
    }
}

export default DisplayHabits
