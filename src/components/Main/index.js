import React from "react";
//import { Switch, Route } from 'react-router-dom';
import {   Routes,Route } from 'react-router-dom';
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";
const Main = props => (
//<Switch>
<Routes>
    <Route exact path="/" component={Series}/>
    <Route exact path="/series/:id" component={SingleSeries}/>
</Routes>
//</Switch>

);

export default Main;