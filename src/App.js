import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from "react-router-dom";

import { Login, Register } from "./login/index";
import "./App.scss";
import Hoc from './hoc';






class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }


  render() {

    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";


    return (
      <Hoc>


<div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
      
      
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




      </Hoc>

   
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
