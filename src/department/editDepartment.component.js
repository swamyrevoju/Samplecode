import React, { Component } from 'react';
import axios from 'axios';

export default class editDepartment extends Component {
  constructor(props) {
    super(props);
    this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);
    this.onChangeDepartmentId = this.onChangeDepartmentId.bind(this);
    this.onChangeDepartmentCode = this.onChangeDepartmentCode.bind(this);
   
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Department_name: '',
      Department_id: '',
      Department_code:''

    }
  }

  

  componentDidMount() {
    console.log("componentDidMount is called.."+this.props.dId);
     // axios.get('http://localhost:4000/department/edit/'+this.props.match.params.id)
     axios.get('http://localhost:4000/department/edit/'+this.props.dId)
          .then(response => {
              this.setState({ 
                Department_name: response.data.Department_name, 
                Department_id: response.data.Department_id,
                Department_code: response.data.Department_code });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeDepartmentName(e) {
    this.setState({
      Department_name: e.target.value
    });
  }
  onChangeDepartmentId(e) {
    this.setState({
      Department_id: e.target.value
    });  
  }
  
  onChangeDepartmentCode(e) {
    this.setState({
      Department_code: e.target.value
    });  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Department_name : this.state.Department_name,
      Department_id : this.state.Department_id,
      Department_code : this.state.Department_code
    };
    axios.post('http://localhost:4000/department/update/'+this.props.dId, obj)
    
        .then(res => console.log(res.data));
    
    //this.props.history.push('/department');
    this.props.action();
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Department</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>Department Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Department_name}
                      onChange={this.onChangeDepartmentName}
                      />
                </div>
                <div className="form-group">
                    <label>Department Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Department_id}
                      onChange={this.onChangeDepartmentId}
                      />
                </div>
            
                <div className="form-group">
                    <label>Department Code: </label>
                    <input type="textarea" 
                      className="form-control"
                      value={this.state.Department_code}
                      onChange={this.onChangeDepartmentCode}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Update Department" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}