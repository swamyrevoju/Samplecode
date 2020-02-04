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
    this.onChangeEmployeeCode = this.onChangeEmployeeCode.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      isLogginActive: true,
      isNewUser:false,
      employeeCode:'',
      password:''
    };
  }

  onChangeEmployeeCode(e) {
    this.setState({
      employeeCode: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    }) 
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
       employeeCode: this.state.employeeCode,
       password : this.state.password,
       role: 'employee'
     };
 
     
     if(this.state.isNewUser){
        axios.post('http://localhost:4000/user/add', obj)
        .then(res => console.log(res.data));
        //this.props.history.push('/department');
        this.showLogin();
  
        this.setState({
          employeeCode: '',
          password: ''
        })  
     } else {
       if(obj.employeeCode === 'admin' && obj.password === 'admin') {
        this.props.action(true, true);
       } else {
      axios.post('http://localhost:4000/user/edit',obj)
      .then(response => {
          if(response.data){
            console.log("response.data",response.data);
            let user = response.data[0];
            console.log("user",user);
            if(user){
              if(user.role === 'admin'){
                console.log("Logged in as admin");
                this.props.action(true, true, user.employeeCode);
              } else {
                console.log("Logged in as employee");
                this.props.action(true, false, user.employeeCode);
              }
              this.props.action(true, false, user.employeeCode);
            } else {
              console.log("username/password incorrect");
              this.props.action(false);
            }

          }
          /*
          this.setState({ 
            Department_name: response.data.Department_name, 
            Department_id: response.data.Department_id,
            Department_code: response.data.Department_code });
          */
      })
      .catch(function (error) {
          console.log(error);
      })
    }
     }

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
                        value={this.state.employeeCode}  
                        onChange={this.onChangeEmployeeCode}                      
                        />
                  </div>
                  <div className="form-group">
                      <label>Password: </label>
                      <input type="password" 
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
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
                onChange={this.onChangeEmployeeCode}                    

                />
          </div>
          <div className="form-group">
              <label>Password: </label>
              <input type="password" 
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}

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
