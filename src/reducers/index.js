import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import mainPage from "./mainPage";
import itemPage from "./itemPage";

export default history => combineReducers({
    mainPage,
    itemPage,
    router: connectRouter(history)
});
