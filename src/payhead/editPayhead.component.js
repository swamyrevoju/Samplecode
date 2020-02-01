import React, { Component } from 'react';
import axios from 'axios';

export default class editPayhead extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeCode = this.onChangeEmployeeCode.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
   
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Employee_name: '',
      Employee_code: '',
      Salary: '',
      Address:''

    }
  }

  componentDidMount() {
    console.log("componentDidMount is called.."+this.props.pId);
     axios.get('http://localhost:4000/payhead/edit/'+this.props.pId)
          .then(response => {
              this.setState({ 
                Employee_name: response.data.Employee_name, 
                Employee_code: response.data.Employee_code,
                Salary: response.data.Salary,
                Address: response.data.Address });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeEmployeeName(e) {
    this.setState({
      Employee_name: e.target.value
    });
  }
  onChangeEmployeeCode(e) {
    this.setState({
      Employee_code: e.target.value
    });  
  }

  onChangeSalary(e) {
    this.setState({
      Salary: e.target.value
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
      Employee_name : this.state.Employee_name,
      Employee_code : this.state.Employee_code,
      Salary: this.state.Salary,
      Address : this.state.Address
    };
    axios.post('http://localhost:4000/payhead/update/'+this.props.pId, obj)
    .then(res => console.log(res.data));
  
  //this.props.history.push('/designation');
  this.props.action();
  }
    
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Payhead</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>Employee Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Employee_name}
                      onChange={this.onChangeEmployeeName}
                      />
                </div>
                <div className="form-group">
                    <label>Employee Code: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Employee_code}
                      onChange={this.onChangeEmployeeCode}
                      />
                </div>

                <div className="form-group">
                    <label>Salary: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Salary}
                      onChange={this.onChangeSalary}
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
                      value="Update Employee" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}