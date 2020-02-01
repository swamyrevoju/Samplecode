import React, { Component } from 'react';
import axios from 'axios';
import TableDepartment from './TableDepartment';
import { Link } from 'react-router-dom';


export default class Department extends Component {

  constructor(props) {
      super(props);
      this.state = {department: []};
    }

    componentWillUnmount(){
      this.setState({ department: null });
    }
    componentDidMount(){
      axios.get('http://localhost:4000/department')
        .then(response => {
          this.setState({ department: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    TableDepartment(callback){
      console.log("callback ->"+callback);
      return this.state.department.map(function(object, i){
          return <TableDepartment obj={object} key={i}  action={callback}/>;
      });
    }

    onAddClick(){
      this.props.action('add');
   }
   

    render() {
      return (
        
        <div>
          <h3 align="center">Department List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Department</th>
                <th>Department Id</th>
                <th>Department Code</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
          
              { this.TableDepartment(this.props.action) }

              

              <tr>
                <Link  onClick={ e => this.onAddClick()}  className=" btn btn-primary">Add Department</Link>
                </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }