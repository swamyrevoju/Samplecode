import React, { Component } from 'react';
import axios from 'axios';

export default class editDesignation extends Component {
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

  componentDidMount() {
    console.log("componentDidMount is called.."+this.props.deId);
     // axios.get('http://localhost:4000/designation/edit/'+this.props.match.params.id)
     axios.get('http://localhost:4000/designation/edit/'+this.props.deId)
          .then(response => {
              this.setState({ 
                Designation_name: response.data.Designation_name, 
                Designation_id: response.data.Designation_id,
                Address: response.data.Address });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
  

    onChangeDesignationName(e) {
    this.setState({
      Designation_name: e.target.value
    });
  }
  onChangeDesignationId(e) {
    this.setState({
      Designation_id: e.target.value
    });  
  }
  
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    });  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Designation_name : this.state.Designation_name,
      Designation_id : this.state.Designation_id,
      Address : this.state.Address
    };
    axios.post('http://localhost:4000/designation/update/'+this.props.deId, obj)
        .then(res => console.log(res.data));
    
    //this.props.history.push('/designation');
    this.props.action();
  }
 


 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Designation</h3>
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
                    <input type="textarea" 
                      className="form-control"
                      value={this.state.Address}
                      onChange={this.onChangeAddress}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Update Designation" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}