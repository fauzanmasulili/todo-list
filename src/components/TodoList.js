import React, { useState } from "react";
import ToDo from "./Todo";
import Completed from './Complete'
import Modal from "./Modal";

const TodoList = ({ todo_list }) => {
    const [showModal, setShowModal] = useState(false);
   
    function changeShowModal() {
        setShowModal(false)
    }
    return (
        <div className="todo-list mt-5">
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex">
                        <span
                            className="px-4 py-2 rounded-full font-normal text-slate-500 bg-amber-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            ToDo
                        </span>
                        <span className="mt-1 ml-3" onClick={() => setShowModal(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </div>

                    <Modal showModal={showModal} changeShowModal={changeShowModal}  />

                    {todo_list.todo_list.map(list => {
                        if (list.status === 0)
                            return <ToDo key={list.id} list={list} />
                    })}
                </div>
                <div>
                    <span
                        className="px-4 py-2 rounded-full font-normal text-slate-500 bg-emerald-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        Complete
                    </span>
                    {todo_list.todo_list.map(list => {
                        if (list.status === 1)
                            return <Completed key={list.id} list={list} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
