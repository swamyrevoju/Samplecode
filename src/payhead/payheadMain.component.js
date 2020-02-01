import React, { Component } from 'react';

import AddPayhead from '../payhead/addPayhead.component';
import EditPayhead from '../payhead/editPayhead.component';
import Payhead from '../payhead/payhead.component';


export default class PayheadMain extends Component {

  constructor(props) {
      super(props);
      this.state = {page: "list"};
      this.handlerAdd = this.handlerAdd.bind(this);
      this.handlerList = this.handlerList.bind(this);
      this.handlerEdit = this.handlerEdit.bind(this);
      this.pId = "-1";

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
          this.pId = data;
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
            body = <Payhead action={this.handlerAdd}/>
        } else if(page === "add"){
            console.log("Inside Else");
           body = <AddPayhead action={this.handlerList}/>
        } else if(page === "edit"){
          console.log("Inside Else");
         body = <EditPayhead action={this.handlerList} pId={this.pId}/>
      }
      return (
        <div>
            {body}
        </div> 
      );
    }
  }