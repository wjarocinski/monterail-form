import React, {Component} from 'react';

import Header from "./components/Header/Header";
import Home from "./views/Home";
import Success from "./views/Success";


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      {/* <Home /> */}
      <Success/>
    </>
    )
  }
}

export default App;
