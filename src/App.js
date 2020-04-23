import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.drawerToggle = this.drawerToggle.bind(this);
    this.state={
      drawerOpen: false
    }
  }
 
    drawerToggle(e){
      this.setState({
        drawerOpen: !this.state.drawerOpen
      });
    }
  
  render (){
    return(
      <div className="App">
      <HeaderMenu drawerOpen={this.state.drawerOpen} drawerToggle={this.drawerToggle}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}
   


export default App;
