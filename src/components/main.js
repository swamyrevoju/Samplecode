
import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import LandingPage from "./landingpage";
import Master from "./master";
import Transaction from "./transaction";
import Report from "./report";


const Main = () => (

    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/master" component = {Master} />
        <Route path = "/transaction" component = {Transaction} />
        <Route path = "/report" component = {Report} />
    </Switch>
)
            
             
        
     

export default Main;


//////////////////////////////////////////////////////////

/*import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from "./landingpage";
import Master from "./master";
import Transaction from "./transaction";
import Report from "./report";

import Create from "../employee/create.component";
import Edit from '../employee/edit.component';
import Index from '../employee/index.component';

/*import AddOrganization from '../organization/addOrganization.component';
import EditOrganization from '../organization/editOrganization.component';
import Organization from '../organization/organization.component';*/

/*import AddDesignation from '../designation/addDesignation.component';
import EditDesignation from '../designation/editDesignation.component';
import Designation from '../designation/designation.component';

import AddBranch from '../branchList/addBranch.component';
import EditBranch from '../branchList/editBranch.component';
import Branch from '../branchList/branch.component';

import AddDepartment from '../department/addDepartment.component';
import EditDepartment from '../department/editDepartment.component';
import Department from '../department/department.component';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                 
                  <Link to={'/organization'} className="nav-link"> Organization</Link>
                  <Link to={'/branch'} className="nav-link">Branch</Link>
                  <Link to={'/designation'} className="nav-link">Designation</Link>
                  <Link to={'/department'} className="nav-link">Department</Link>
                </li>
               
               
               
              </ul>
            

            </div>
          </nav>


          <Switch>
          <Route exact path = "/" component = {LandingPage} />
        <Route path = "/master" component = {Master} />
        <Route path = "/transaction" component = {Transaction} />
        <Route path = "/report" component = {Report} />

              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              {/*<Route exact path='/addOrganization' component={ AddOrganization } />
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
             
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;*/

