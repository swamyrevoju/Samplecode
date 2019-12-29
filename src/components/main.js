
import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import LandingPage from "./landingpage";
import Master from "./master";
import Transaction from "./transaction";
import Report from "./report";


const Main = () => (

    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/master" component = {Master} />
        <Route path = "/transaction" component = {Transaction} />
        <Route path = "/report" component = {Report} />
    </Switch>
)  

export default Main;
