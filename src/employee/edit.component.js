import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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
      joiningDate:'',
      Salary:''

    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/employee/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                Employee_name: response.data.Employee_name, 
                Employee_id: response.data.Employee_id,
                Phone_number: response.data.Phone_number,
                Email_id: response.data.Email_id,
                Address: response.data.Address,
                Designation: response.data.Designation,
                joiningDate: response.data.joiningDate,
                Salary: response.data.Salary

              });
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
  onChangeEmployeeId(e) {
    this.setState({
      Employee_id: e.target.value
    });  
  }
  onChangePhoneNumber(e) {
    this.setState({
      Phone_number: e.target.value
    });
  }
  onChangeEmailId(e) {
    this.setState({
      Email_id: e.target.value
    });  
  }
  onChangeDesignation(e) {
    this.setState({
      Designation: e.target.value
    });  
  }
  onChangeJoiningDate(e) {
    this.setState({
      joiningDate: e.target.value
    });  
  }
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    });  
  }
  onChangeSalary(e) {
    this.setState({
      Salary: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Employee_name : this.state.Employee_name,
      Employee_id : this.state.Employee_id,
      Phone_number : this.state.Phone_number,
      Email_id : this.state.Email_id,
      Address : this.state.Address,
      Designation : this.state.Designation,
      joiningDate : this.state.joiningDate,
      Salary : this.state.Salary

    };
    axios.post('http://localhost:4000/employee/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Employee</h3>
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
                    <label>Phone: </label>
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
                    <input type="textarea" 
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
                    <label>Joining Date: </label>
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
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}