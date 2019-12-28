import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
    <Header  className = "header-color" title= {<Link style= {{textDecoration: 'none', color: 'white'}} to= "/">HUMAN RESOURCE MANAGEMENT</Link>} scroll>
            <Navigation>
                <Link to="/master">Master</Link>
                <Link to="/transaction">Transaction</Link>
                <Link to="/report">Report</Link>
            </Navigation>
        </Header>
        <Drawer title= {<Link style= {{textDecoration: 'none', color: 'black'}} to= "/">HRM</Link>}>
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
    );
  }
}

export default App;
