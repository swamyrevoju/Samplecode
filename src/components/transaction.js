import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {  Tab, Tabs, TabList,TabPanel } from 'react-tabs';




import Create from "../employee/create.component";
import Edit from '../employee/edit.component';
import Index from '../employee/index.component';


class Transaction extends Component {
    render() {
        return(
            <Router>
                <div className= "category-tabs">
                    <Tabs  onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
                        
                        <TabList>
                            <Tab>Employee</Tab>
                            <Tab>PaySlip</Tab>
                        </TabList>

                        <TabPanel> <Index/></TabPanel>
                   {/*  <TabPanel> <PaySlip/></TabPanel>*/}

                    </Tabs>
                </div>

            <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />

            </Switch>
              
            </Router>
        );
    }
}

export default Transaction;