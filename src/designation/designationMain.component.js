import React, { Component } from 'react';

import AddDesignation from '../designation/addDesignation.component';
import EditDesignation from '../designation/editDesignation.component';
import Designation from '../designation/designation.component';


export default class DesignationtMain extends Component {

  constructor(props) {
      super(props);
      this.state = {page: "list"};
      this.handlerAdd = this.handlerAdd.bind(this);
      this.handlerList = this.handlerList.bind(this);
      this.handlerEdit = this.handlerEdit.bind(this);
      this.deId = "-1";

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
          this.deId = data;
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
            body = <Designation action={this.handlerAdd}/>
        } else if(page === "add"){
            console.log("Inside Else");
           body = <AddDesignation action={this.handlerList}/>
        } else if(page === "edit"){
          console.log("Inside Else");
         body = <EditDesignation action={this.handlerList} deId={this.deId}/>
      }
      return (
        <div>
            {body}
        </div> 
      );
    }
  }