import React, { Component } from 'react';
import axios from 'axios';
import TablePayslip from './TablePayslip';
import { Link } from 'react-router-dom';


export default class Payslip extends Component {

  constructor(props) {
      super(props);
      this.state = {employee: []};
    }

    componentWillUnmount(){
      this.setState({ department: null });
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
    TablePayslip(callback){
      console.log("callback ->"+callback);
      return this.state.employee.map(function(object, i){
          return <TablePayslip obj={object} key={i}  action={callback}/>;
      });
    }
  
    onAddClick(){
      this.props.action('add');
   }
   

    render() {
      return (
        
        <div>
          <h3 align="center">Employee List</h3>
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
            
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
          
              { this.TablePayslip(this.props.action) }

             
               
              <tr>
                <Link  onClick={ e => this.onAddClick()}  className=" btn btn-primary">Generate Payslip</Link>
              </tr>


            </tbody>
          </table>
        </div>
      );
    }
  }