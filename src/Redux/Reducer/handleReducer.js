/* eslint-disable no-unreachable */
/* eslint-disable default-case */
import { ADD_MESSAGE } from "../Types/mainTypes";

const stateHandle = {
    chat : [
        {id:1,name:"henry",text:"Hello World!!!",src:`https://i.pravatar.cc/150?u=${Date.now()}`},
        {id:2,name:"alex",text:"Hello !!!",src:`https://i.pravatar.cc/150?u=${Date.now() + 1}`},
        {id:3,name:"mary",text:"Hi !!!",src:`https://i.pravatar.cc/150?u=${Date.now() + 2}`},
    ],
};
const handleReducer = ( state = stateHandle, action ) => {
    switch ( action.type ) {
        case ADD_MESSAGE : {
            let updateState = state;
            console.log(true);
            let object = {name:action.name,text:action.message,src:`https://i.pravatar.cc/150?u=${action.avatar}`};
            updateState.chat.push(object);
            state = updateState;
            return {...state};
        }; break;
        default: break;
    };
    return {...state};
};
export default handleReducer;