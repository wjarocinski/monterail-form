import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./views/Home";
import Success from "./views/Success";


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      {/* <BrowserRouter>
      <Switch>
        <Route path="/" componet={Home}/>
        <Route path="/success" componet={Success}/>
      </Switch> */}
        <Home />
        {/* <Success/> */}
      {/* </BrowserRouter> */}
    </>
    )
  }
}

export default App;
