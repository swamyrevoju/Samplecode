import React, { Component } from 'react';
import axios from 'axios';

class TableOrg extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
   
    delete() {
      axios.get('http://localhost:4000/organization/delete/'+this.props.obj._id)
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
            {this.props.obj.Organization_name}
          </td>
          <td>
            {this.props.obj.Organization_phone}
          </td>
          <td>
            {this.props.obj.Address}
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

export default TableOrg;