import React, { Component } from 'react';
import axios from 'axios';
import TablePayhead from './TablePayhead';
import { Link } from 'react-router-dom';


export default class Payhead extends Component {

  constructor(props) {
      super(props);
      this.state = {payhead: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/payhead')
        .then(response => {
          this.setState({ payhead: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    TablePayhead(){
      return this.state.payhead.map(function(object, i){
          return <TablePayhead obj={object} key={i} />;
      });
    }
    takeUserToPage = () => {
      console.log("takeUserToPage is called...");
      //this.setState({currentPage: this.state.currentPage + 1, data: 
      //dataMock.data[this.state.currentPage + 1]}, () => {
      // this.props.history.push('Route')
      //});
    }
    render() {
      return (
        
        <div>
          <h3 align="center">Payhead</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Employee name</th>
                <th>Employee Code</th>
                <th>Salary</th>

                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
          
              { this.TablePayhead() }

              <tr>
              <Link onClick={this.props.action} className="nav-link btn btn-primary">Create Payhead</Link>
              </tr>

            </tbody>
          </table>
        </div>
      );
    }
  }