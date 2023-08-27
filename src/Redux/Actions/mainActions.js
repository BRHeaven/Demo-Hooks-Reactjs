import { ADD_MESSAGE } from "../Types/mainTypes";

export const handleMessage = (object) => {
    return {
        name : object.name,
        message : object.message,
        avatar : Date.now(),
        type : ADD_MESSAGE,
    };
};