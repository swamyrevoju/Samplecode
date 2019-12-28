import React, { Component } from 'react';
import axios from 'axios';
import TableDesignation from './TableDesignation';
import { Link } from 'react-router-dom';


export default class Designation extends Component {

  constructor(props) {
      super(props);
      this.state = {designation: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/designation')
        .then(response => {
          this.setState({ designation: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    TableDesignation(){
      return this.state.designation.map(function(object, i){
          return <TableDesignation obj={object} key={i} />;
      });
    }

    render() {
      return (
        
        <div>
          <h3 align="center">Designation List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Desanization</th>
                <th>Desanization Id</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
          
              { this.TableDesignation() }

              <tr>
              <Link to={'/addDesignation'} className="nav-link" className="btn btn-primary">Add Designation</Link>
              </tr>

            </tbody>
          </table>
        </div>
      );
    }
  }