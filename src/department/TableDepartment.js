import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableDepartment extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/department/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
   
        <tr>
          <td>
            {this.props.obj.Department_name}
          </td>
          <td>
            {this.props.obj.Department_id}
          </td>
          <td>
            {this.props.obj.Department_code}
          </td>
          <td>
            <Link to={"/editDepartment/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        
       </tr>
     
    );
}
}

export default TableDepartment;