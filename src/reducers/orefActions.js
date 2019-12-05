import * as actionTypes from './orefActionTypes';

export const addTodo = (text) => {
    return {
        type: actionTypes.ADD_TODO,
        text
    }
}