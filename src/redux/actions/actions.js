import { ADD_TODO_LIST, REMOVE_TODO_LIST, SET_TODO_LIST, UPDATE_TODO_LIST } from "../actionTypes/actionTypes"

export const setTodoList = (todo_list) => {
    return (dispatch) => {
        dispatch({
            type: SET_TODO_LIST,
            payload: todo_list
        })
    }
}

export const addTodoList = (task) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO_LIST,
            payload: task
        })
    }
}

export const updateTodoList = (task) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_TODO_LIST,
            payload: task
        })
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TODO_LIST,
            payload: id
        })
    }
}