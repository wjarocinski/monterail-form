import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./views/Home";
import Success from "./views/Success";


const App = () => {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/success" component={Success}/>
        </Switch>
      </Router>
    )
};

export default App;
