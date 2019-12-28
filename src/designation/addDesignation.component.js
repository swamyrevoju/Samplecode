import React, { Component } from 'react';
import axios from 'axios';

export default class AddDesignation extends Component {
  constructor(props) {
    super(props);
    this.onChangeDesignationName = this.onChangeDesignationName.bind(this);
    this.onChangeDesignationId = this.onChangeDesignationId.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
  

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Designation_name: '',
      Designation_id: '',
      Address:''
     
    }
  }
 
  onChangeDesignationName(e) {
    this.setState({
      Designation_name: e.target.value
    });
  }
  onChangeDesignationId(e) {
    this.setState({
      Designation_id: e.target.value
    }) 
  }
 
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    })
  }

 
  onSubmit(e) {
   e.preventDefault();

    const obj = {
      Designation_name: this.state.Designation_name,
      Designation_id : this.state.Designation_id,
      Address : this.state.Address
    };
    axios.post('http://localhost:4000/designation/add', obj)
        .then(res => console.log(res.data));
        this.props.history.push('/designation');
    this.setState({
      Designation_name: '',
      Designation_id: '',
      Address: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center" >Add New Designation</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Designation Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Designation_name}
                      onChange={this.onChangeDesignationName}
                      />
                </div>
                <div className="form-group">
                    <label>Designation Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Designation_id}
                      onChange={this.onChangeDesignationId}
                      />
                </div>
            
                <div className="form-group">
                  
                    <label>Address: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Address}
                      onChange={this.onChangeAddress}
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit" 
                     value="Add Designation" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}