import { SET_TODO_LIST } from "../actionTypes/actionTypes"

export const setTodoList = (todo_list) => {
    console.log(todo_list)
    return (dispatch) => {
        dispatch({
            type: SET_TODO_LIST,
            payload: todo_list
        })
    }
}

// export const addTodo = todo => ({
//     type: "ADD_TODO",
//     payload: todo
// })