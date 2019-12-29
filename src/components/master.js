/*import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';





class Master extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
   
        if(this.state.activeTab === 0){
            return(
                <div>
                    <h1>This is Organization</h1>
                </div> 
            )
        } else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is Branch</h1>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is Department</h1>
                </div>  
            )
        } else if(this.state.activeTab === 3){
            return(
                <div>
                    <h1>This is Designation</h1>
                </div>  
            )
        } else if(this.state.activeTab === 4){
            return(
                <div>
                    <h1>This is PayHead</h1>
                </div>  
            )
        }              
    }

    render() {
        return(
            <div className= "category-tabs">
                <Tabs activeTab= { this.state.activeTab } onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Organization</Tab>
                    <Tab>Branch</Tab>
                    <Tab>Department</Tab>
                    <Tab>Designation</Tab>
                    <Tab>PayHead</Tab>
                </Tabs>

                <section className= "master-grid">
                   
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Master;*/



import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Test from "./test.component";

//import LandingPage from "./landingpage";
//import Transaction from "./transaction";
///import Report from "./report";
//import {  Tab, Tabs, TabList,TabPanel } from 'react-mdl';
import {  Tab, Tabs, TabList,TabPanel } from 'react-tabs';





/*import AddOrganization from '../organization/addOrganization.component';
import EditOrganization from '../organization/editOrganization.component';
import Organization from '../organization/organization.component';*/

import AddDesignation from '../designation/addDesignation.component';
import EditDesignation from '../designation/editDesignation.component';
import Designation from '../designation/designation.component';

import AddBranch from '../branchList/addBranch.component';
import EditBranch from '../branchList/editBranch.component';
import Branch from '../branchList/branch.component';

import AddDepartment from '../department/addDepartment.component';
import EditDepartment from '../department/editDepartment.component';
import Department from '../department/department.component';

class Master extends Component {
    

  render() {
    return (
      <Router>
         <div className= "category-tabs">
                <Tabs  onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>

                    <TabList>
                  {/*  <Tab>Organization</Tab>*/}

                    <Tab>Branch</Tab>
                    <Tab>Department</Tab>
                    <Tab>Designation</Tab>

                    </TabList>

                     {/*  <TabPanel> <Organization/></TabPanel>*/}
                    <TabPanel> <Branch/></TabPanel>
                    <TabPanel> <Department/></TabPanel>
                    <TabPanel> <Designation/></TabPanel>
                </Tabs>
       
            </div>
        

          <Switch>
        

             
              {/*<Route exact path='/addOrganization' component={ AddOrganization } />
              <Route path='/editOrganization/:id' component={ EditOrganization } />
              <Route path='/organization' component={ Organization } />*/}
              <Route exact path='/addDesignation' component={ AddDesignation } />
                <Route path='/editDesignation/:id' component={ EditDesignation } />
              <Route path='/designation' component={ Designation} />
              <Route exact path='/addBranch' component={ AddBranch } />
              <Route path='/editBranch/:id' component={ EditBranch } />
              <Route path='/branch' component={ Branch} />
              <Route exact path='/addDepartment' component={ AddDepartment } />
              <Route path='/editDepartment/:id' component={ EditDepartment } />
              <Route path='/department' component={ Department} />
             
          </Switch>
        
      </Router>
    );
  }
}

export default Master;
