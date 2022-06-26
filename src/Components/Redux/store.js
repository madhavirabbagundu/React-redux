import {createStore} from "redux";
import { Reducer } from "./reducer";

export const Store = createStore(Reducer,{
    todos:[{ id: 1, name:"Learn React", status:true}]
    // todos:[]
 });

Store.subscribe(()=>{
    console.log(Store.getState());
})