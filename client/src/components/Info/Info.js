import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
    render() {
        return (
            <div>
            <h1 id="info" className="something">Charlotte</h1>
            <p1 className="about">Charlotte is a lottery number selector app. You can randomize, or select your numbers individually. 
                Ideally this will eventually scale up into its own global lottery. Charlotte makes no guarantees
                about winning the lottery. It is extremely unlikely for anyone to win the lottery. The current purpose 
                of this app is to store the numbers you've picked to your username and just to help you pick your 
                numbers and remember them.
            </p1>
            </div>
        );
    }
}

export default Info;