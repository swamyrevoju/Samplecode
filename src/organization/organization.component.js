import React, { Component } from 'react';
import axios from 'axios';
import TableOrg from './TableOrg';
import { Link } from 'react-router-dom';


export default class Organization extends Component {

  constructor(props) {
      super(props);
      this.state = {organization: []};
    }

    componentWillUnmount(){
      this.setState({ organization: null });
    }

   
    componentDidMount(){
      axios.get('http://localhost:4000/organization')
        .then(response => {
          this.setState({ organization: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    TableOrg(callback){
      console.log("callback ->"+callback);
      return this.state.organization.map(function(object, i){
          return <TableOrg obj={object} key={i}  action={callback}/>;
      });
    }
  
    onAddClick(){
      this.props.action('add');
   }

    render() {
      return (
        
        <div>
          <h3 align="center">Organization</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>

          
              <tr>
                <Link  onClick={ e => this.onAddClick()}  className=" btn btn-primary"> Organization</Link>
              </tr>
             

              <tr>
                <th>Organization</th>
                <th>Organization Phone</th>
                <th>Address</th>
                <th colSpan="2"></th>
              </tr>

            
              </thead> 
              <tbody> 
          
              { this.TableOrg(this.props.action) }
           
              

            </tbody>
          </table>
        </div>
      );
    }
  }