import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu.js';
import M1 from './contents/M1';
import Sub1 from './contents/Sub1';
import Sub2 from './contents/Sub2';
import Sub3 from './contents/Sub3';
import Sub4 from './contents/Sub4';
import Sub5 from './contents/Sub5';
import Sub6 from './contents/Sub6';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
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
      <Router>
      <div className="App">
      <HeaderMenu drawerOpen={this.state.drawerOpen} drawerToggle={this.drawerToggle}/>
      <div>
        <Switch>
          <Route path="/m1">
            <M1 />
          </Route>
          <Route path="/sub1">
            <Sub1 />
          </Route>
          <Route path="/sub2">
            <Sub2 />
          </Route>
          <Route path="/sub3">
            <Sub3 />
          </Route>
          <Route path="/sub4">
            <Sub4 />
          </Route>
          <Route path="/sub5">
            <Sub5 />
          </Route>
          <Route path="/sub6">
            <Sub6 />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
    )
  }
}
   


export default App;
