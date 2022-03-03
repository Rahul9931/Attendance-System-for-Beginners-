import { combineReducers } from "redux";
import types from "../types";
import auth from './auth';
import Classvalue from "./Classvalue";
import load_data from "./load_data";
import Table_data_selector from "./Table_data_selector";

const appReducer = combineReducers({
    auth,
    load_data,
    Table_data_selector,
    Classvalue,
})

const rootReducer = (state, action) =>{
    if(action.type == types.CLEARE_REDUX_STATE){
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer