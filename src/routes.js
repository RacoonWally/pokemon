import React from 'react';
import {Switch, Route} from "react-router";

import MainPage from './pages/mainPage'
import ItemPage from "./pages/itemPage";



export default (
    <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/item/:id' component={ItemPage} exact/>
    </Switch>
);
