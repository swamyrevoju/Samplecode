import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {  Tab, Tabs, TabList,TabPanel } from 'react-tabs';


import Display from '../display/display.component';

class Report extends Component {
/*
    constructor(props) {
        super(props);
        this.employeeCode = this.props.match.params.employeeCode;
        console.log("Report -> employeeCode:"+this.props.match.params.employeeCode);        
    }*/
    render() {
        let params = new URLSearchParams(this.props.location.search);
        let employeeCode = params.get("employeeCode");
        console.log("Report -> employeeCode:"+employeeCode);   

        return(
        

   
        <Router>
            <div className= "category-tabs">
                <Tabs  onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
                    
                    <TabList>                       
                        <Tab>Payslip Details</Tab>
                    </TabList>

                    <TabPanel> <Display employeeCode={employeeCode}/></TabPanel>

                </Tabs>
            </div>

        <Switch>
          
         
          <Route path='/Display' component={ Display } />
        </Switch>
          
        </Router>
    );
}
}



export default Report;          