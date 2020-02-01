
import React, { Component } from 'react';
import axios from 'axios';

{/*import React, { Component } from 'react';
import axios from 'axios';

export default class editBranch extends Component {
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
      Branch_code:'',
      Address:''

    }
  }

  componentDidMount() {
    console.log("componentDidMount is called.."+this.props.bId);
    //axios.get('http://localhost:4000/branch/edit/'+this.props.match.params.id)

      axios.get('http://localhost:4000/branch/edit/'+this.props.bId)
          .then(response => {
              this.setState({ 
                Branch_name: response.data.Branch_name, 
                Branch_id: response.data.Branch_id,
                Branch_code: response.data.Branch_code,
                Address: response.data.Address });
          })
          .catch(function (error) {
              console.log(error);
          })
          //this.props.action();
    }

    onChangeBranchName(e) {
    this.setState({
      Branch_name: e.target.value
    });
  }
  onChangeBranchId(e) {
    this.setState({
      Branch_id: e.target.value
    });  
  }

  onChangeBranchCode(e) {
    this.setState({
      Branch_code: e.target.value
    }) 
  }
  
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    });  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Branch_name : this.state.Branch_name,
      Branch_id : this.state.Branch_id,
      Branch_code: this.state.Branch_code,
      Address : this.state.Address
    };
    axios.post('http://localhost:4000/branch/update/'+this.props.bId, obj)
        .then(res => console.log(res.data));
    
    //this.props.history.push('/branch');
    this.props.action();

  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Branch</h3>
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
                    <input type="textarea" 
                      className="form-control"
                      value={this.state.Address}
                      onChange={this.onChangeAddress}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Update Branch" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}*/}


export default class editBranch extends Component {
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
      Branch_code:'',
      Address:''

    }
  }

  componentDidMount() {
    console.log("componentDidMount is called.."+this.props.bId);
    //axios.get('http://localhost:4000/branch/edit/'+this.props.match.params.id)

      axios.get('http://localhost:4000/branch/edit/'+this.props.bId)
          .then(response => {
              this.setState({ 
                Branch_name: response.data.Branch_name, 
                Branch_id: response.data.Branch_id,
                Branch_code: response.data.Branch_code,
                Address: response.data.Address });
          })
          .catch(function (error) {
              console.log(error);
          })
          //this.props.action();
    }

    onChangeBranchName(e) {
    this.setState({
      Branch_name: e.target.value
    });
  }
  onChangeBranchId(e) {
    this.setState({
      Branch_id: e.target.value
    });  
  }

  onChangeBranchCode(e) {
    this.setState({
      Branch_code: e.target.value
    }) 
  }
  
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    });  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Branch_name : this.state.Branch_name,
      Branch_id : this.state.Branch_id,
      Branch_code: this.state.Branch_code,
      Address : this.state.Address
    };
    axios.post('http://localhost:4000/branch/update/'+this.props.bId, obj)
        .then(res => console.log(res.data));
    
    //this.props.history.push('/branch');
    this.props.action();

  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Branch</h3>
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
                    <input type="textarea" 
                      className="form-control"
                      value={this.state.Address}
                      onChange={this.onChangeAddress}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Update Branch" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}