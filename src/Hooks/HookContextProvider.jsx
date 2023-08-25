/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
import React, { useReducer } from 'react'
export const context = React.createContext();
const stateReducer = {
    cart : [],
}
const handleReducer = (state = stateReducer, action) => {
    switch(action.type) {
        case "addCart": {
            let update = state.cart;
            let index = update.findIndex(object => object.id === action.item.id);
            if (index === -1) {
                update.push(action.item);
            }
            state.cart = update;
            return {...state};
        }; break;
        case "deleteItem": {
            let update = state.cart;
            let index = update.findIndex(object => object.id === action.item.id);
            if (index !== -1) {
                update.splice(index,1);
            }
            state.cart = update;
            return {...state};
        }; break;
        default: break;
    }
    return { ...state };
}
export default function HookContextProvider(props) {
    let [state,dispatch] = useReducer(handleReducer,stateReducer);
    const store = {cartReducer:[state,dispatch]};
  return (
    <context.Provider value={store}>
        {props.children}
    </context.Provider>
  )
}
