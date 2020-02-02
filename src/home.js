import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


import "./App.scss";






class HomeApp extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.showRegister = this.showRegister.bind(this);
    this.showLogin = this.showLogin.bind(this);

    this.state = {
      isLogginActive: true,
      username:'',
      password:'',
      isNewUser:false
    };
  }

  onLogin(){
    this.props.action(true);
  }

  showRegister(){
    this.setState({isNewUser:true})
  }
  showLogin(){
    this.setState({isNewUser:false})
  }
  onSubmit(e) {
    e.preventDefault();
 
     const obj = {
       username: this.state.username,
       password : this.state.password
     };
 
     this.props.action(true);
 /*
     axios.post('http://localhost:4000/department/add', obj)
         .then(res => console.log(res.data));
         //this.props.history.push('/department');
         this.props.action();
         
     this.setState({
       username: '',
       password: ''
     }) */
   }

  render() {
    const isNewUser = this.state.isNewUser;
    console.log("isNewUser:"+isNewUser);
    let body;
    if(!isNewUser) {
        body = <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>User name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.Department_name}
                        onChange={this.onChangeDepartmentName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Password: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.Department_id}
                        onChange={this.onChangeDepartmentId}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" 
                      value="Login" 
                        className="btn btn-primary"/>
                  </div>
                  <div>
                    <Link  onClick={ e => this.showRegister()}  >Click here to register</Link>
                  </div>
              </form>
        } else {
          body = <form onSubmit={this.onSubmit}>
          <div className="form-group">
              <label>Employee Code:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.state.employeeCode}
                onChange={this.onChangeDepartmentName}
                />
          </div>
          <div className="form-group">
              <label>Password: </label>
              <input type="text" 
                className="form-control"
                value={this.state.password}
                onChange={this.onChangeDepartmentId}
                />
          </div>
          <div className="form-group">
              <input type="submit" 
              value="Register" 
                className="btn btn-primary"/>
          </div>
          <div>
            <Link  onClick={ e => this.showLogin()}  >Click here to login</Link>
          </div>
      </form>
        }

    return (


  <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {body}

          </div>
         </div>
      </div>
      

   
    );
  }
}


export default HomeApp;
