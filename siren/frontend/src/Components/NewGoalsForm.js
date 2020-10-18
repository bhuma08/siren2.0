import React, { Component } from 'react'

class NewGoalsForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Goals: </label>
                        <input type='text' placeholder='What is you goal?'></input><br></br>
                    </div>

                    <div>
                        <label>What actions are you going to take? </label><br></br>
                        <input type='text' placeholder='One'></input><br></br>
                        <input type='text' placeholder='Two'></input><br></br>
                        <input type='text' placeholder='Three'></input><br></br>
                        <input type='text' placeholder='Four'></input><br></br>
                    </div>

                    <div>
                        <label>Start date and time: </label>
                        <input type='text' placeholder='YYYY-MM-DD HH-MM'></input><br></br>
                    </div>

                    <div>
                        <label>End date and time: </label>
                        <input type='text' placeholder='YYYY-MM-DD HH-MM'></input><br></br>
                    </div>    
                </form>    
            </div>
        )
    }
}

export default NewGoalsForm
