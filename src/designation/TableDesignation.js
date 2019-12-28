import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableDesignation extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/designation/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
   
        <tr>
          <td>
            {this.props.obj.Designation_name}
          </td>
          <td>
            {this.props.obj.Designation_id}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          <td>
            <Link to={"/editDesignation/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        
       </tr>
     
    );
}
}

export default TableDesignation;