import React, { Component } from 'react';
import axios from 'axios';

export default class AddPayslip extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmailId = this.onChangeEmailId.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDesignation = this.onChangeDesignation.bind(this);
    this.onChangeJoiningDate = this.onChangeJoiningDate.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Employee_name: '',
      Employee_id: '',
      Phone_number:'',
      Email_id:'',
      Address:'',
      Designation:'',
      joiningDate: '',
      Salary: ''

    }
  }
 
  onChangeEmployeeName(e) {
    this.setState({
      Employee_name: e.target.value
    });
  }
  onChangeEmployeeId(e) {
    this.setState({
      Employee_id: e.target.value
    }) 
  }
  onChangePhoneNumber(e) {
    this.setState({
      Phone_number: e.target.value
    })
  }
  onChangeEmailId(e) {
    this.setState({
      Email_id: e.target.value
    })  
  }
  onChangeDesignation(e) {
    this.setState({
      Designation: e.target.value
    }) 
  }

  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    })
  }

  
  onChangeJoiningDate(e) {
    this.setState({
      joiningDate: e.target.value
    })
  }

  onChangeSalary(e) {
    this.setState({
      Salary: e.target.value
    })
  }

  
  onSubmit(e) {
   e.preventDefault();
   console.log("Employee_name: "+this.state.Employee_name);

    const obj = {
      Employee_name: this.state.Employee_name,
      Employee_id : this.state.Employee_id,
      Phone_number : this.state.Phone_number,
      Email_id : this.state.Email_id,
      Address : this.state.Address,
      Designation : this.state.Designation,
      joiningDate : this.state.joiningDate,
      Salary : this.state.Salary

    };
    console.log("date: "+this.state.joiningDate);
    axios.post('http://localhost:4000/employee/add', obj)
        .then(res => console.log(res.data));
        this.props.history.push('/payslip');
    this.setState({
      Employee_name: '',
      Employee_id: '',
      Phone_number: '',
      Email_id: '',
      Address: '',
      Designation: '',
      joiningDate: '',
      Salary: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center" >Payslip Generation</h3>
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
                    <label>Employee Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Employee_id}
                      onChange={this.onChangeEmployeeId}
                      />
                </div>
                <div className="form-group">
                    <label>Phone : </label>
                    <input type="tel" 
                      className="form-control"
                      value={this.state.Phone_number}
                      onChange={this.onChangePhoneNumber}
                      />
                </div>
                <div className="form-group">
                    <label>Email Id: </label>
                    <input type="email" 
                      className="form-control"
                      value={this.state.Email_id}
                      onChange={this.onChangeEmailId}
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
                    <label>Designation: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Designation}
                      onChange={this.onChangeDesignation}
                      />
                </div>
                <div className="form-group">
                    <label>Data of joining: </label>
                    <input type="date" 
                      className="form-control"
                      value={this.state.joiningDate}
                      onChange={this.onChangeJoiningDate}
                      />
                </div>

                <div className="form-group">
                    <label>Salary: </label>
                    <input type="number" 
                      className="form-control"
                      value={this.state.Salary}
                      onChange={this.onChangeSalary}
                      />
                </div>

                <div className="form-group">
                    <input type="submit" 
                     value="Payslip generation" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}