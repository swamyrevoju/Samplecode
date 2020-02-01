import React, { Component } from 'react';
import axios from 'axios';
import TablePayhead from './TablePayhead';
import { Link } from 'react-router-dom';


export default class Payhead extends Component {

  constructor(props) {
      super(props);
      this.state = {payhead: []};
    }

    componentWillUnmount(){
      this.setState({ department: null });
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
   
    TablePayhead(callback){
      console.log("callback ->"+callback);
      return this.state.payhead.map(function(object, i){
          return <TablePayhead obj={object} key={i}  action={callback}/>;
      });
    }
<<<<<<< HEAD
  
    onAddClick(){
      this.props.action('add');
   }

   

=======
    takeUserToPage = () => {
      console.log("takeUserToPage is called...");
      //this.setState({currentPage: this.state.currentPage + 1, data: 
      //dataMock.data[this.state.currentPage + 1]}, () => {
      // this.props.history.push('Route')
      //});
    }
>>>>>>> cf385dfa95f18a57a37c49908dec1d5f07362dc0
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
          
              { this.TablePayhead(this.props.action) }

            
              <tr>
<<<<<<< HEAD
                <Link  onClick={ e => this.onAddClick()}  className=" btn btn-primary"> Create Payheadn</Link>
=======
              <Link onClick={this.props.action} className="nav-link btn btn-primary">Create Payhead</Link>
>>>>>>> cf385dfa95f18a57a37c49908dec1d5f07362dc0
              </tr>

            </tbody>
          </table>
        </div>
      );
    }
  }