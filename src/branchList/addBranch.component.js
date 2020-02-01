import React, { Component } from 'react';
import axios from 'axios';

{/*export default class AddBranch extends Component {
  constructor(props) {
    super(props);
    this.onChangeBranchName = this.onChangeBranchName.bind(this);
    this.onChangeBranchId = this.onChangeBranchId.bind(this);
    this.onChangeBranchCode = this.onChangeBranchCode.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
  

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Branch_name: '',
      Branch_id: '',
      Branch_code: '',
      Address:''
     
    }
  }
 
  onChangeBranchName(e) {
    this.setState({
      Branch_name: e.target.value
    });
  }
  onChangeBranchId(e) {
    this.setState({
      Branch_id: e.target.value
    }) 
  }
  onChangeBranchCode(e) {
    this.setState({
      Branch_code: e.target.value
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
      Branch_name: this.state.Branch_name,
      Branch_id : this.state.Branch_id,
      Branch_code: this.state.Branch_code,
      Address : this.state.Address
    };
    axios.post('http://localhost:4000/branch/add', obj)
        .then(res => console.log(res.data));
        this.props.history.push('/branch');
    this.setState({
      Branch_name: '',
      Branch_id: '',
      Branch_code:'',
      Address: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center" >Add New Branch</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Branch Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Branch_name}
                      onChange={this.onChangeBranchName}
                      />
                </div>
                <div className="form-group">
                    <label>Branch Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Branch_id}
                      onChange={this.onChangeBranchId}
                      />
                </div>
                <div className="form-group">
                    <label>Branch Code: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Branch_code}
                      onChange={this.onChangeBranchCode}
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
                     value="Add Branch" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}*/}






export default class AddBranch extends Component {
  constructor(props) {
    super(props);
    this.onChangeBranchName = this.onChangeBranchName.bind(this);
    this.onChangeBranchId = this.onChangeBranchId.bind(this);
    this.onChangeBranchCode = this.onChangeBranchCode.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
  

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Branch_name: '',
      Branch_id: '',
      Branch_code: '',
      Address:''
     
    }
  }
 
  onChangeBranchName(e) {
    this.setState({
      Branch_name: e.target.value
    });
  }
  onChangeBranchId(e) {
    this.setState({
      Branch_id: e.target.value
    }) 
  }
  onChangeBranchCode(e) {
    this.setState({
      Branch_code: e.target.value
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
      Branch_name: this.state.Branch_name,
      Branch_id : this.state.Branch_id,
      Branch_code: this.state.Branch_code,
      Address : this.state.Address
    };
    axios.post('http://localhost:4000/branch/add', obj)
        .then(res => console.log(res.data));
        //this.props.history.push('/branch');
        this.props.action();
    this.setState({
      Branch_name: '',
      Branch_id: '',
      Branch_code:'',
      Address: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center" >Add New Branch</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Branch Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Branch_name}
                      onChange={this.onChangeBranchName}
                      />
                </div>
                <div className="form-group">
                    <label>Branch Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Branch_id}
                      onChange={this.onChangeBranchId}
                      />
                </div>
                <div className="form-group">
                    <label>Branch Code: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Branch_code}
                      onChange={this.onChangeBranchCode}
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
                     value="Add Branch" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}