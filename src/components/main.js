
import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import HomePage from "./homePage";

import Master from "./master";
import Transaction from "./transaction";
import Report from "./report";


const Main = () => (

    <Switch>
        
        <Route exact path = "/" component = {HomePage} />
        <Route path = "/master" component = {Master} />
        <Route path = "/transaction" component = {Transaction} />
        <Route path = "/report" component = {Report} />
        <Route path = "/logout" component = {HomePage} />

    </Switch>
)  

export default Main;
