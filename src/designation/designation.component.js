import React, { Component } from 'react';
import axios from 'axios';
import TableDesignation from './TableDesignation';
import { Link } from 'react-router-dom';


export default class Designation extends Component {

  constructor(props) {
      super(props);
      this.state = {designation: []};
    }

    componentWillUnmount(){
      this.setState({ designation: null });
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
   
    TableDesignation(callback){
      console.log("callback ->"+callback);
      return this.state.designation.map(function(object, i){
          return <TableDesignation obj={object} key={i}  action={callback}/>;
      });
    }
  

    onAddClick(){
      this.props.action('add');
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
          
              { this.TableDesignation(this.props.action) }
      

              <tr>
                <Link  onClick={ e => this.onAddClick()}  className=" btn btn-primary">Add Designation</Link>
              </tr>
             

            </tbody>
          </table>
        </div>
      );
    }
  }