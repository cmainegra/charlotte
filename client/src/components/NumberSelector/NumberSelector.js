import React, { Component } from "react";   
import "./NumberSelector.css";
import API from "../../utils/API";
// import uuid from 'uuid';

class NumberSelector extends Component {
   
    // state = {
    //     numbers: [
    //         { id: uuid(), num1: num1 },
    //         { id: uuid(), num2: num2 },
    //         { id: uuid(), num3: num3 },
    //         { id: uuid(), num4: num4 },
    //         { id: uuid(), num5: num5 },
    //         { id: uuid(), num6: num6 }
    //     ]
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

    componentWillReceiveProps = event => {
        this.setState({ num1: event.target.value.num1,  });
    }
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
           <div className="numbers">
            <form onSubmit={this.handleSubmit}>
                <input name="num1" value="num1" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num2" value="num2" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num3" value="num3" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num4" value="num4" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num5" value="num5" id="num" maxlength="2" min="1" max="75" type="number"></input>
                <input name="num6" value="num6" id="num" maxlength="2" min="1" max="25" type="number"></input>
            </form>
            <button>Randomize</button> 
            <button onClick={this.handleSubmit}>Submit</button>
           </div>
        );
    }
}

export default NumberSelector;