import React, { Component } from 'react';
import axios from 'axios';
import DisplayRow from './DisplayRow';
import { Link } from 'react-router-dom';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {employee: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/employee')
        .then(response => {
          this.setState({ employee: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    DisplayRow(){
      return this.state.employee.map(function(object, i){
          return <DisplayRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        
        <div>
          <h3 align="center">Payslip Details</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Employee Id</th>
                <th>Phone </th>
                <th>Email Id</th>
                <th>Address</th>
                <th>Designation</th>
                <th>Joining date</th>
                <th>Salary</th>

               
              </tr>
            </thead>
            <tbody>
          
              { this.DisplayRow() }

              <tr>
              {/*<Link to={'/create'} className="nav-link" className="btn btn-primary">Add Employee</Link>*/}
              </tr>

            </tbody>
          </table>
        </div>
      );
    }
  }