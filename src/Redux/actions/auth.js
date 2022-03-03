import store from "../store"
import types from "../types";
const {dispatch} = store;

export function show(){
   dispatch({
       type: types.SHOW,
   }) 
}

export function hide(){
    dispatch({
        type: types.HIDE,
    }) 
}

export function load_data(data){
    dispatch({
        type: types.LOAD_DATA,
        payload: data,
    }) 
}
export function day_data(){
    dispatch({
        type: types.DAY_DATA,
    })
}
export function weak_data(){
    dispatch({
        type: types.WEAK_DATA,
    })
}
export function month_data(){
    dispatch({
        type: types.MONTH_DATA,
    })
}
export function classvalue1A(){
    dispatch({
        type: types.CLASSVALUE1A,
    })
}
export function classvalue2B(){
    dispatch({
        type: types.CLASSVALUE2B,
    })
}