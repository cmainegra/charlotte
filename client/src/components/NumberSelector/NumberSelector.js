import React, { Component } from "react";   
import "./NumberSelector.css";
import API from "../../utils/API";

class NumberSelector extends Component {
    // state = {
    //     numbers : [num1,num2,num3,num4,num5,num6]
    // }
    
    // randomize = event => {
    //     event.preventDefault();
    //     if(randomNum.length < 6) {
    //         let randomNum = [];
    //         numbers.push(randomNum) = Math.floor(Math.random() * 75)
    //         this.randomize();
    //     }else {
    //         setState(numbers.push(randomNum))
    //     }
    // }
    
    
    handleSubmit = event => {
        event.preventDefault();
        API.handleSubmit(event.target.num1.value, event.target.num2.value, event.target.num3.value, event.target.num4.value, event.target.num5.value, event.target.num6.value)
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
           <div>
               <form onSubmit={this.handleSubmit}>
                <input name="num1" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num2" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num3" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num4" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num5" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num6" id="num" maxlength="2" min="1" max="25" type="number"></input>
            </form>
            <button>Randomize</button> 
            <button onClick={this.handleSubmit}>Submit</button>
           </div>
        );
    }
}

export default NumberSelector;