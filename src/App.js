import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route path="/" component={Home}exact/>
      </BrowserRouter>

    );
  }
}
export default App;