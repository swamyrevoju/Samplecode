import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TablePayslip extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    
    
    delete() {
      axios.get('http://localhost:4000/employee/delete/'+this.props.obj._id)
          .then(() => {
            console.log('Deleted');
            this.props.action('delete');
          })
          .catch(err => {
            console.log(err); 
            this.props.action('delete');
          })
  }

  onEditClick(id){
    this.props.action(this.props.obj._id);
 }

 onDeleteClick(id){
  this.delete();    
 }
  render() {
    return (
   
        <tr>
          <td>
            {this.props.obj.Employee_name}
          </td>
          <td>
            {this.props.obj.Employee_id}
          </td>
          <td>
            {this.props.obj.Phone_number}
          </td>
          <td>
            {this.props.obj.Email_id}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          <td>
            {this.props.obj.Designation}
          </td>
          <td>
            {this.props.obj.joiningDate}
          </td>
          <td>
            {this.props.obj.Salary}
          </td>
          <td>
            <button onClick={ e => this.onEditClick(this.props.obj._id)} className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button onClick={ e => this.onDeleteClick(this.props.obj._id)} className="btn btn-danger">Delete</button>
          </td>
       </tr>
     
    );
}
}

export default TablePayslip;