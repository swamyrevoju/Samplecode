import React, { Component } from 'react';
import axios from 'axios';

export default class editOrganization extends Component {
  constructor(props) {
    super(props);
    this.onChangeOrganizationName = this.onChangeOrganizationName.bind(this);
    this.onChangeOrganizationPhone = this.onChangeOrganizationPhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
   
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Organization_name: '',
      Organization_phone: '',
      Address:''

    }
  }

  componentDidMount() {
    console.log("componentDidMount is called.."+this.props.oId);
     // axios.get('http://localhost:4000/designation/edit/'+this.props.match.params.id)
     axios.get('http://localhost:4000/organization/edit/'+this.props.oId)
 
          .then(response => {
              this.setState({ 
                Organization_name: response.data.Organization_name, 
                Organization_phone: response.data.Organization_phone,
                Address: response.data.Address });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeOrganizationName(e) {
    this.setState({
      Organization_name: e.target.value
    });
  }
  onChangeOrganizationPhone(e) {
    this.setState({
      Organization_phone: e.target.value
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
      Organization_name : this.state.Organization_name,
      Organization_phone : this.state.Organization_phone,
      Address : this.state.Address
    };
   
  axios.post('http://localhost:4000/organization/update/'+this.props.oId, obj)
  .then(res => console.log(res.data));

//this.props.history.push('/designation');
this.props.action();
}

 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Organization</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>Organization Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Organization_name}
                      onChange={this.onChangeOrganizationName}
                      />
                </div>
                <div className="form-group">
                    <label>Organization Phone: </label>
                    <input type="tel" 
                      className="form-control"
                      value={this.state.Organization_phone}
                      onChange={this.onChangeOrganizationPhone}
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
                      value="Save" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}