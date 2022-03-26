import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { ADD_TODO_LIST, REMOVE_TODO_LIST, UPDATE_TODO_LIST } from '../redux/actionTypes/actionTypes'

const Modal = ({ showModal, changeShowModal, list, forceUpdate }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState(0)
    const todo_list = useSelector(state => state.todo_list.todo_list)
    const dispatch = useDispatch()

    const cancelButtonRef = useRef(null)

    useEffect(() => {
        if (list) {
            setTitle(list.title)
            setDescription(list.description)
            setStatus(list.status)
        }
    }, [list])

    function handleTitleChange(event) {
        event.preventDefault();
        setTitle(event.target.value)
    }

    function handleDescriptionChange(event) {
        event.preventDefault();
        setDescription(event.target.value)
    }

    function handleStatusChange(event) {
        if (event.target.checked) {
            setStatus(1)
        } else {
            setStatus(0)
        }

    }

    function handleCreateChange() {
        let date = new Date()
        let created_at = moment(date).format("YYYY-MM-DD hh:mm")
        let last_item = todo_list[todo_list.length - 1]

        let data = {
            id: last_item.id + 1,
            title: title,
            description: description,
            status: status,
            createdAt: created_at,
        }

        dispatch({
            type: ADD_TODO_LIST,
            payload: data,
        })
        changeShowModal()
        setTitle("")
        setDescription("")
        setStatus(0)
    }

    function handleUpdateChange() {
        let data = {
            id: list.id,
            title: title,
            description: description,
            status: status,
        }

        dispatch({
            type: UPDATE_TODO_LIST,
            payload: data,
        })

        changeShowModal()
    }

    function handleDeleteTask(list) {
        const id = list.id
        dispatch({
            type: REMOVE_TODO_LIST,
            payload: id
        })
        changeShowModal()
    }


    return (
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={changeShowModal} >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            ToDo
                                        </Dialog.Title>
                                        <div className='mt-2'>
                                            <label htmlFor="title" className="block text-md font-medium text-gray-700">
                                                Title
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-md">
                                                <input
                                                    type="text"
                                                    value={title}
                                                    name="title"
                                                    id="title"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 h-8 block w-full pl-2 pr-12 sm:text-md border-gray-300 rounded-md"
                                                    placeholder="Title"
                                                    onChange={(e) => handleTitleChange(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <label htmlFor="description" className="block text-md font-medium text-gray-700">
                                                Description
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-md">
                                                <textarea
                                                    type="text"
                                                    rows={3}
                                                    value={description}
                                                    name="description"
                                                    id="description"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-md border-gray-300 rounded-md"
                                                    placeholder="Description"
                                                    onChange={(e) => handleDescriptionChange(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex mt-5 items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="status"
                                                    name="status"
                                                    defaultChecked={status}
                                                    onChange={(e) => handleStatusChange(e)}
                                                    type="checkbox"
                                                    className="focus:ring-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="status" className="font-medium text-gray-700">
                                                    Completed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                {status ?
                                    null :
                                    <button
                                        type="button"
                                        className={` ${list ? '' : 'hidden'} w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
                                        onClick={() => handleDeleteTask(list)}
                                    >
                                        Delete
                                    </button>
                                }
                                {
                                    list ?
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handleUpdateChange}
                                            ref={cancelButtonRef}
                                        >
                                            Update
                                        </button> :
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handleCreateChange}
                                            ref={cancelButtonRef}
                                        >
                                            Create
                                        </button>
                                }
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}


export default (Modal);
