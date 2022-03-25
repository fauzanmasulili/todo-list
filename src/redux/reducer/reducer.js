import { SET_TODO_LIST } from "../actionTypes/actionTypes";

const initialState = {
    todo_list: [],
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST:
            return {
                ...state, todo_list: action.payload
            }
        default: 
            return state;
    }
}

export default todoListReducer;