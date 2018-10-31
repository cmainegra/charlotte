import React, { Component } from "react";
import "./ScrapeNJ.css";
import Scrape from "../../../../routes/api-routes";


class ScrapeNJ extends Component {
    
    state = {
        lotteryNumber: "test"
    }
    componentDidMount() {
        var comp = this;
        Scrape.scrapeLottery("https://www.lotteryusa.com/new-jersey/mega-millions/", "div", (data) => {
            console.log("callback");
            this.setState({
                lotteryNumber: "realdata"
            });
        });
    }

   
    render () {
        return (
            <p id="scrapeNJ" class="something"> Scrape NJ Lottery
            <br />
            {this.state.lotteryNumber}
             </p>
        );
    }
}

export default ScrapeNJ;    