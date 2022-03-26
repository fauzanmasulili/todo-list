import React, { useState } from "react";

import Modal from './Modal';

const ToDo = ({ list }) => {
    const [showModal, setShowModal] = useState(false);

    function clicked() {
        setShowModal(true)
    }

    function changeShowModal() {
        setShowModal(false)
    }

    return (
        <div onClick={() => clicked()} className="max-w-sm mt-5 rounded cursor-pointer overflow-hidden shadow-lg">
            <div className="p-5 flex justify-between">
                <span>
                    {list.title}
                </span>
            </div>
            <Modal list={list} showModal={showModal} changeShowModal={changeShowModal} />
        </div>

    );
}
export default ToDo;