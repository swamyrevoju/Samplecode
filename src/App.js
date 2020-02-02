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
        super(props);
        this.state = {isLoggedIn: props.isLoggedIn};
        this.setLoggetIn = this.setLoggetIn.bind(this);

      }


      setLoggetIn(isLoggedIn) {
        console.log("setLoggetIn is called...");
          this.setState({
            isLoggedIn: isLoggedIn ? true : false
          })
        }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log("isLoggedIn:"+isLoggedIn);
    let body;
    if(isLoggedIn){
        body = 
        <div  className="demo-big-content">
      <Layout>
      <Header  className = "header-color" title= {<Link style= {{textDecoration: 'none', color: 'white'}} to= "/">PAYROLL MANAGEMENT SYSTEM</Link>} scroll>
              <Navigation>
                  <Link to="/master">Master</Link>
                  <Link to="/transaction">Transaction</Link>
                  <Link to="/report">Report</Link>
              </Navigation>
          </Header>
          <Drawer title= {<Link style= {{textDecoration: 'none', color: 'black'}} to= "/">PMS</Link>}>
              <Navigation>
                 
              <Link to="/master">Master</Link>
                  <Link to="/transaction">Transaction</Link>
                  <Link to="/report">Report</Link>
              </Navigation>
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
