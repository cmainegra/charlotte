import React, { Component } from "react";   
import "./NumberSelector.css";
import API from "../../utils/API";
// import uuid from 'uuid';

class NumberSelector extends Component {
        
    // constructor() {
    //     super();
    //     this.state = { numbers: [1,2,3,4,5,6] };
    // }


    // state = {
    //         numbers: [1,2,3,4,5,6]
    //     }
        
        // randomize = event => {
        //     event.preventDefault();
        //     if(randomNum.length < 6) {
        //         randomNum = Math.floor(Math.random() * Math.floor(75));
        //         this.setState = numbers.push(randomNum);
        //         this.randomize();
        //     } else {
        //         this.setState(this.state.numbers)
        //     }
        // }
        handleSubmit = event => {
            event.preventDefault();
            API.handleSubmit(event.target.numbers)
            .then( response => {
                console.log(response.data)
            })
            .catch( error => {
                console.log(error);
            });
            console.log("submitted");
       }
    

    render() {
        return(
           <div className="numbers">
            <form onSubmit={this.handleSubmit}>
                <input name="num1" value="num1" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num2" value="num2" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num3" value="num3" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num4" value="num4" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num5" value="num5" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num6" value="num6" id="num" maxlength="2" min="1" max="25" type="number"></input>
            </form>
            <button onClick={this.randomize}>Randomize</button> 
            <button onClick={this.handleSubmit}>Submit</button>
           </div>
        );
        }

    }
export default NumberSelector;