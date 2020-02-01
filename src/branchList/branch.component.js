import React, { Component } from 'react';
import axios from 'axios';
import TableBranch from './TableBranch';
import { Link } from 'react-router-dom';

{/*import React, { Component } from 'react';
import axios from 'axios';
import TableBranch from './TableBranch';
import { Link } from 'react-router-dom';


export default class Branch extends Component {

  constructor(props) {
      super(props);
      this.state = {branch: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/branch')
        .then(response => {
          this.setState({ branch: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    TableBranch(){
      return this.state.branch.map(function(object, i){
          return <TableBranch obj={object} key={i} />;
      });
    }

    render() {
      return (
        
        <div>
          <h3 align="center">Branch List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Branch</th>
                <th>Branch Id</th>
                <th>Branch Code</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
          
              { this.TableBranch() }

              <tr>
              <Link to={'/addBranch'}  className="nav-link" className="btn btn-primary">Add Branch</Link>
              </tr>

            </tbody>
          </table>
        </div>
      );
    }
  }*/}


  
  
  
  export default class Branch extends Component {
  
    constructor(props) {
        super(props);
        this.state = {branch: []};
      }
  
      componentWillUnmount(){
        this.setState({ branch: null });
      }
      componentDidMount(){
        axios.get('http://localhost:4000/branch')
          .then(response => {
            this.setState({ branch: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      TableBranch(callback){
        console.log("callback ->"+callback);
        return this.state.branch.map(function(object, i){
            return <TableBranch obj={object} key={i}  action={callback}/>;
        });
      }
  
      onAddClick(){
        this.props.action('add');
     }
     
      render() {
        return (
          
          <div>
            <h3 align="center">Branch List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Branch Id</th>
                  <th>Branch Code</th>
                  <th>Address</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
            
                { this.TableBranch(this.props.action) }
  
                <tr>
                <Link  onClick={ e => this.onAddClick()}  className="nav-link btn btn-primary">Add Branch</Link>
                </tr>
  
              </tbody>
            </table>
          </div>
        );
      }
    }