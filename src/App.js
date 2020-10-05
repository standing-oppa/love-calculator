import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import LoveDisplay from './components/LoveDisplay/LoveDisplay';
import Input from './components/Input/Input'

class App extends Component {
  state = {
    showLove: false,
    percentage: 0,
  }

  calculateLoveHandler = () => {
    this.setState({showLove: true})
    let calculation = Math.random() * 101
    calculation = Math.floor(calculation);
    this.setState({percentage: calculation})
  }

  render() {
    const showResults = this.state.showLove ? <LoveDisplay percentage={this.state.percentage}/> : null
    return (
      <div className="App">
        <Header/>
        {showResults}
        <Input />
        <button type="button" className="btn btn-outline-danger" onClick={this.calculateLoveHandler}>Calculate</button>
      </div>
    );
  }
}

export default App;
