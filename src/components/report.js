import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {  Tab, Tabs, TabList,TabPanel } from 'react-tabs';

import AddPayslip from "../payslip/addpayslip.component";
import EditPayslip from '../payslip/editpayslip.component';
import Payslip from '../payslip/payslip.component';
class Report extends Component {
    render() {
        return(
        

   
        <Router>
            <div className= "category-tabs">
                <Tabs  onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
                    
                    <TabList>
                       
                        <Tab>Payslip Details</Tab>
                    </TabList>

                    <TabPanel> <Payslip/></TabPanel>

                </Tabs>
            </div>

        <Switch>
          
          <Route exact path='/AddPayslip' component={ AddPayslip } />
          <Route path='/editPayslip/:id' component={ EditPayslip } />
          <Route path='/payslip' component={ Payslip } />

        </Switch>
          
        </Router>
    );
}
}



export default Report;