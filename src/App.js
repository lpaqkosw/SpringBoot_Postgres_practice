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
      loginWindow: false,
      id:"",
      pw:"",
      loggedin:false,
      token:"",
      drawerOpen: false,
      textError:false
    }
    this.handleLoginWindow = this.handleLoginWindow.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePwChange = this.handlePwChange.bind(this);
    this.handleLogin= this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLoginWindow(){
    this.setState({loginWindow:!this.state.loginWindow});
  }
  handleIdChange(a){
    this.setState({id:a.target.value});
  }
  handlePwChange(a){
    this.setState({pw:a.target.value})
  }
  handleLogin(){
    const requestOption = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({'username':this.state.id,'password':this.state.pw})
    }
    console.log(requestOption.body)
    fetch('http://175.119.109.254:3001/login',requestOption)
        .then(response=> response.json())
        .then(data=>{
          if(data.token==="" || !data.token){
            this.setState({textError:true});
            alert("login failed");
            return;
          }
          else{
            console.log(data.token);
            this.setState({token:data.token,loggedin:true,loginWindow:!this.state.loginWindow});
            return;
          }
        })
        .catch(error=>{
            console.error("error!",error);
        })    
  }
 
  handleLogout (){
    alert("logged out");
    this.setState({loggedin:false,id:"",pw:"",token:""});
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
      <HeaderMenu drawerOpen={this.state.drawerOpen} textError={this.state.textError} handleLogout={this.handleLogout} drawerToggle={this.drawerToggle} loggedin={this.state.loggedin} loginWindow={this.state.loginWindow} handleLoginWindow={this.handleLoginWindow} handleIdChange={this.handleIdChange} handlePwChange={this.handlePwChange} handleLogin={this.handleLogin}/>
      <div>
        <Switch>
          <Route path="/m1">
            <M1 />
          </Route>
          <Route path="/sub1">
            <Sub1 />
          </Route>
          <Route path="/sub2">
            <Sub2 id={this.state.id} token={this.state.token} loggedin={this.state.loggedin} key={this.state.loggedin}/>
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
