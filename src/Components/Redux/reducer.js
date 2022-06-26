import { ADD_TODO } from "./action";


export const Reducer = (Store,action)=> {
    switch (action.type){
        case ADD_TODO:
            return {
                ...Store,
                todos:[...Store.todos, action.payload]
            };
          
    };
}