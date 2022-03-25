import React, { useEffect } from "react";
import { connect } from "react-redux";

const TodoList = ({ todo_list }) => {

    useEffect(() => {
        console.log(todo_list)
    },)

    return (
        <div className="todo-list">
            {todo_list.todo_list.map((list, index) => (
                <div key={index}>{list.title}</div>
            ))}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list
    }
}

export default connect(mapStateToProps)(TodoList);
