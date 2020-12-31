import React, { Component } from 'react';
import DeleteHabit from './DeleteHabit';
import '../styles/DisplayHabits.css'
import ProgressBar from './ProgressBar';

class DisplayHabits extends Component {
    
    render() {
        return (
            <>
                <h3>My daily habit tracker: </h3>
                <div className='habits'>
                    {this.props.habits.map((item, idx) =>
                        <div className='oneHabit' key={idx}> 
                            <div> 
                                <h3>{item.habit}</h3><br></br>
                                <ProgressBar id={item.id}/><br></br>
                                <DeleteHabit id={item.id}/>
                            </div>
                        </div>) }   
                </div>
            </>)
    }
}

export default DisplayHabits
