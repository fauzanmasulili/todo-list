import React from "react";
import { connect } from "react-redux";
import Completed from './Complete'

const TodoList = ({ todo_list }) => {

    return (
        <div className="todo-list mt-5">
            <div className="grid grid-cols-2">
                <div>
                    <span
                        class="px-4 py-2 rounded-full font-normal text-slate-500 bg-amber-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        Todo
                    </span>
                    {todo_list.todo_list.map(list => {
                        if (list.status === 0)
                            return <div>{list.title}</div>
                    })}
                </div>
                <div>
                    <span
                        class="px-4 py-2 rounded-full font-normal text-slate-500 bg-emerald-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        Complete
                    </span>
                    {todo_list.todo_list.map(list => {
                        if (list.status === 1)
                            return <Completed list={list} />
                    })}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list
    }
}

export default connect(mapStateToProps)(TodoList);
