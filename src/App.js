import React, {Component} from 'react';

import Header from "./components/Header/Header";
import Home from "./views/Home";
import categories from "./mocks/categories.json";
console.log(categories)

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Home />
    </>
    )
  }
}

export default App;
