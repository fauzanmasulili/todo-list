import { ADD_TODO_LIST, REMOVE_TODO_LIST, SET_TODO_LIST, UPDATE_TODO_LIST } from "../actionTypes/actionTypes";

const initialState = {
    todo_list: [],
}

const todoListReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case SET_TODO_LIST:
            return {
                ...state, todo_list: action.payload
            }

        case ADD_TODO_LIST:
            return {
                ...state, todo_list: [...state.todo_list, action.payload]
            }

        case UPDATE_TODO_LIST:
            return {
                ...state,
                todo_list: [
                    ...state.todo_list.filter(task => task.id !== action.payload.id), action.payload,
                ]
            }

        case REMOVE_TODO_LIST:
            return {
                ...state, todo_list: state.todo_list.filter((task) => task.id !== action.payload)
            }
        default:
            return state;
    }
}

export default todoListReducer;