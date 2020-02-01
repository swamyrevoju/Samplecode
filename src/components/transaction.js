import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {  Tab, Tabs, TabList,TabPanel } from 'react-tabs';




import Create from "../employee/create.component";
import Edit from '../employee/edit.component';
import Index from '../employee/index.component';
import EmployeeMain from '../employee/employeeMain.component';


import AddPayslip from "../payslip/addpayslip.component";
import EditPayslip from '../payslip/editpayslip.component';
import Payslip from '../payslip/payslip.component';
import PayslipMain from '../payslip/payslipMain.component';



class Transaction extends Component {
    render() {
        return(
            <Router>
                <div className= "category-tabs">
                    <Tabs  onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
                        
                        <TabList>
                            <Tab>Employee</Tab>
                            <Tab>Payslip</Tab>
                        </TabList>

                        <TabPanel> <EmployeeMain/></TabPanel>
                        <TabPanel> <PayslipMain/></TabPanel>

                    </Tabs>
                </div>

            <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />

              <Route exact path='/AddPayslip' component={ AddPayslip } />
              <Route path='/editPayslip/:id' component={ EditPayslip } />
              <Route path='/payslip' component={ Payslip } />

            </Switch>
              
            </Router>
        );
    }
}

export default Transaction;