import React, { Component } from 'react';

import AddOrganization from '../organization/addOrganization.component';
import EditOrganization from '../organization/editOrganization.component';
import Organization from '../organization/organization.component';


export default class OrganizationtMain extends Component {

  constructor(props) {
      super(props);
      this.state = {page: "list"};
      this.handlerAdd = this.handlerAdd.bind(this);
      this.handlerList = this.handlerList.bind(this);
      this.handlerEdit = this.handlerEdit.bind(this);
      this.oId = "-1";

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
          this.oId = data;
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
            body = <Organization action={this.handlerAdd}/>
        } else if(page === "add"){
            console.log("Inside Else");
           body = <AddOrganization action={this.handlerList}/>
        } else if(page === "edit"){
          console.log("Inside Else");
         body = <EditOrganization action={this.handlerList} oId={this.oId}/>
      }
      return (
        <div>
            {body}
        </div> 
      );
    }
  }