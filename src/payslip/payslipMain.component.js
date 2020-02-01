import React, { Component } from 'react';

import AddPayslip from '../payslip/addpayslip.component';
import EditPayslip from '../payslip/editpayslip.component';
import Payslip from '../payslip/payslip.component';


export default class PayslipMain extends Component {

  constructor(props) {
      super(props);
      this.state = {page: "list"};
      this.handlerAdd = this.handlerAdd.bind(this);
      this.handlerList = this.handlerList.bind(this);
      this.handlerEdit = this.handlerEdit.bind(this);
      this.psId = "-1";

    }

    handlerList() {
      console.log("handlerList is called...");
        this.setState({
          page: "list"
        })
      }

      handlerAdd(data) {
        console.log("handlerAdd is called...data:"+data);
        let page = "list";
        if(data){
          if(data === 'delete') {
            page = "list";
          } else if (data === 'add') {
            page = "add";
          } else {
            page = "edit";
          }
          this.psId = data;
        }
        console.log("page :"+page);
        this.setState({
          page: page
        })

      }

      handlerEdit(id) {
        console.log("handlerEdit is called...id:"+id);
        this.setState({
          page: "edit"
        })
      }

 
    render() {

        const page = this.state.page;
        console.log("page:"+page);
        let body;
        if(page === "list"){
            console.log("Inside If");
            body = <Payslip action={this.handlerAdd}/>
        } else if(page === "add"){
            console.log("Inside Else");
           body = <AddPayslip action={this.handlerList}/>
        } else if(page === "edit"){
          console.log("Inside Else");
         body = <EditPayslip action={this.handlerList} psId={this.psId}/>
      }
      return (
        <div>
            {body}
        </div> 
      );
    }
  }