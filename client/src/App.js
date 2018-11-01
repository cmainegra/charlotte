import React, { Component } from 'react';
// import { Browser as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Info from "./components/Info";
import Login from "./components/Login";
import NumberSelector from "./components/NumberSelector";
// import ScrapeNJ from "./components/ScrapeNJ";
// import ScrapeNY from "./components/ScrapeNY";
import SelectedShown from "./components/SelectedShown";

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
        <Info/>
        <NumberSelector test="hello"/>
        <SelectedShown/>
      </div>
    )
}
}

export default App;