import React, { useEffect, useState } from "react";
import { setTodoList } from "./redux/actions/actions";
import { connect } from "react-redux";
import './App.css'
import Modal from './components/Modal';
import TodoList from "./components/TodoList";

const App = ({setTodoList}) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(response => response.json())
      .then(result => {
        if (result) {
          setTodoList(result)
          setLoading(false)
        }
      })
  }, [])

  function changeShowModal() {
    setShowModal(false)
  }

  return (
    <div className="App">
      <div>
        <h1 className="text-xl font-bold">Todo List</h1>
      </div>
      {loading ?
        <div>loading</div> :
        <TodoList />
      }
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal showModal={showModal} changeShowModal={changeShowModal} />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    setTodoList: (todo_list) => {
      dispatch(setTodoList(todo_list))
    }
  }
}


export default connect(null, mapDispatchToProps)(App);
