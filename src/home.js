import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";


import "./App.scss";






class HomeApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  onLogin(){
    this.props.action(true);
  }


  render() {




    return (


  <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
          <Link onClick={ e => this.onLogin()}>Click here to login</Link>

          </div>

        </div>
      </div>
      

   
    );
  }
}


export default HomeApp;
