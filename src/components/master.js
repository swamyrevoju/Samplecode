import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import {  Tab, Tabs, TabList,TabPanel } from 'react-tabs';





import AddOrganization from '../organization/addOrganization.component';
import EditOrganization from '../organization/editOrganization.component';
import Organization from '../organization/organization.component';
import OrganizationMain from '../organization/organizationMain.component';


import AddDesignation from '../designation/addDesignation.component';
import EditDesignation from '../designation/editDesignation.component';
import Designation from '../designation/designation.component';
import DesignationMain from '../designation/designationMain.component';


import AddBranch from '../branchList/addBranch.component';
import EditBranch from '../branchList/editBranch.component';
import Branch from '../branchList/branch.component';
import BranchMain from '../branchList/branchMain.component';

import AddDepartment from '../department/addDepartment.component';
import EditDepartment from '../department/editDepartment.component';
import Department from '../department/department.component';
import DepartmentMain from '../department/departmentMain.component';


import AddPayhead from '../payhead/addPayhead.component';
import EditPayhead from '../payhead/editPayhead.component';
import Payhead from '../payhead/payhead.component';
import PayheadMain from '../payhead/payheadMain.component';


class Master extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }  

  render() {
    return (
      <Router>
         <div className= "category-tabs">
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
    {  //<Tabs  onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
    }

                    <TabList>
                        <Tab>Organization</Tab>
                        <Tab>Branch</Tab>
                        <Tab>Department</Tab>
                        <Tab>Designation</Tab>
                        <Tab>Payhead</Tab>

                    </TabList>

<<<<<<< HEAD
                    <TabPanel> <OrganizationMain/></TabPanel>
                    <TabPanel> <BranchMain/></TabPanel>
                    <TabPanel> <DepartmentMain/></TabPanel>
                    <TabPanel> <DesignationMain/></TabPanel>
                    <TabPanel> <PayheadMain/></TabPanel>
=======
                    <TabPanel> <Organization/></TabPanel>
                    <TabPanel> <BranchMain/></TabPanel>
                    <TabPanel> <Department/></TabPanel>
                    <TabPanel> <Designation/></TabPanel>
                    <TabPanel> <Payhead/></TabPanel>
>>>>>>> cf385dfa95f18a57a37c49908dec1d5f07362dc0

                </Tabs>
       
            </div>
        

          <Switch>
        

             
              <Route exact path='/addOrganization' component={ AddOrganization } />
              <Route path='/editOrganization/:id' component={ EditOrganization } />
              <Route path='/organization' component={ Organization } />
              
              <Route exact path='/addDesignation' component={ AddDesignation } />
              <Route path='/editDesignation/:id' component={ EditDesignation } />
              <Route path='/designation' component={ Designation} />

              <Route exact path='/addBranch' component={ AddBranch } />
              <Route path='/editBranch/:id' component={ EditBranch } />
              <Route path='/branch' component={ Branch} />

              <Route exact path='/addDepartment' component={ AddDepartment } />
              <Route path='/editDepartment/:id' component={ EditDepartment } />
              <Route path='/department' component={ Department} />

              <Route exact path='/addPayhead' component={ AddPayhead } />
              <Route path='/editPayhead/:id' component={ EditPayhead } />
              <Route path='/payhead' component={ Payhead} />
           
          </Switch>
        
      </Router>
    );
  }
}

export default Master;