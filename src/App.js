import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './App.css'
import TodoList from "./components/TodoList";
import { SET_TODO_LIST } from "./redux/actionTypes/actionTypes";

const App = () => {
  const dispatch = useDispatch();
  const todo_list = useSelector(state => state.todo_list)


  useEffect(() => {
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log(result)
          dispatch({
            type: SET_TODO_LIST,
            payload: result,
          })
        }
      })
  }, [dispatch])

  return (
    <div className="App">
      <div>
        <h1 className="text-xl font-bold">Todo List</h1>
      </div>
      <TodoList todo_list={todo_list} />
    </div>
  );
}



export default (App);
