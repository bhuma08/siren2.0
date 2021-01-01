import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../styles/DisplayHabits.css'
import axios from 'axios';

class ProgressBar extends Component {

    state ={
        habits:"",
        frequency:0,
        width: 0.00
    }

    componentDidMount(){

        const token = this.props.token

        const config = {
            headers :{
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`,
            }
        }

        axios.get(`https://siren-final-backend.herokuapp.com/api/habits/${this.props.id}`, config)
            .then((response)=> {
                this.setState({ habits : response.data.habit })
                console.log(this.state.habits)

                this.setState({ frequency : response.data.frequency  })
                console.log(this.state.frequency)

                this.setState({ width : response.data.progress })
                console.log(this.state.width)
            })
            .catch((error)=>{
                console.log(error);
            });

    }

    handleClick= e =>{

        e.preventDefault()

        const divide = 100/this.state.frequency
        console.log(divide)
        const add = +this.state.width + +divide
        console.log(add)

        if (add<=100){

            this.setState({ width: add })

            const token = this.props.token

            const data={
                habit: this.state.habits,
                frequency: this.state.frequency,
                progress: add
            }
            console.log(data)

            const options ={
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Token ${token}`,
                }
            }
            fetch(`https://siren-final-backend.herokuapp.com/api/habits/${this.props.id}/`, options)
                .then(r => r.json())
                .catch(console.warn)
        }
    }

    render() {
        const style = {
            width: this.state.width + '%',
        };

        return (

            <>
                <p className='habitDisplay'>Completed: {this.state.width} %</p>

                <div className="progress" onClick={this.handleClick}>
                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={style}></div>
                </div>
            </>
        )
    }
}
const mSTP = state =>({
    token: state.AuthReducer.token
})

export default connect(mSTP)(ProgressBar);
