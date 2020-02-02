import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import HomeApp from './home';


class App extends Component {
    constructor(props) {
        console.log("props.isLoggedIn:"+props.isLoggedIn);
        console.log("props.isAdmin:"+props.isAdmin);

        super(props);
        this.state = {isLoggedIn: props.isLoggedIn};
        this.setLoggetIn = this.setLoggetIn.bind(this);
        this.onLogOut = this.onLogOut.bind(this);

      }

      onLogOut(){
        this.setLoggetIn(false,false);
      }
      setLoggetIn(isLoggedIn,isAdmin) {
        console.log("setLoggetIn is called...");
          this.setState({
            isLoggedIn: isLoggedIn ? true : false,
            isAdmin: isAdmin ? true : false
          })
        }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const isAdmin = this.state.isAdmin;

    console.log("isLoggedIn:"+isLoggedIn+" isAdmin:"+isAdmin);
    let body;
    let nav;

    if(isLoggedIn){
        if(isAdmin) {
          nav = <Navigation>
                  <Link to="/master">Master</Link>
                  <Link to="/transaction">Transaction</Link>
                  <Link to="/report">Report</Link>  
                  <Link onClick={ e => this.onLogOut()}  to="/logout">Logout</Link>              
                </Navigation>
        } else {
          nav = <Navigation>
                  <Link to="/report">Report</Link> 
                  <Link onClick={ e => this.onLogOut()}  to="/logout">Logout</Link>               
                </Navigation>
        }
        body = 
        <div  className="demo-big-content">
      <Layout>
      <Header  className = "header-color" title= {<Link style= {{textDecoration: 'none', color: 'white'}} to= "/">PAYROLL MANAGEMENT SYSTEM</Link>} scroll>
        {nav}
      </Header>
          <Drawer title= {<Link style= {{textDecoration: 'none', color: 'black'}} to= "/">PMS</Link>}>
            {nav}
          </Drawer>
          <Content>
              <div className="page-content" />
              
              <Main/>
          </Content>
      </Layout>
  </div>
  
  
    } else {
        body = <div> <HomeApp action={this.setLoggetIn}/></div>
    }
    return (
        <div> 
            {body}
        </div>
    );
  }
}



export default App;
