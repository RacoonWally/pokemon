import React from 'react';
import {Switch, Route, Redirect} from "react-router";

import MainPage from './pages/mainPage'
import ItemPage from "./pages/itemPage";



export default (
    <Switch>
        <Route path='/page/:id' component={MainPage} exact/>
        <Route path='/item/:id' component={ItemPage} exact/>
        <Redirect to='/page/1'/>
    </Switch>
);
