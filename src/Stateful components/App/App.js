import React, { Component } from 'react';
import Quote from '../../Pure components/Quote/Quote'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: "",
      quote: "it's connected"
    }
  }
  render() {
    return (
      <div id = "qoute-box" className="App">
        <Quote quote = {this.state.quote}></Quote>
      </div>
    );
  }
}

export default App;
