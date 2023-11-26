import React from "react";

const Modal = (props) => {
    const { task, onChange, onClickAdd, showFlag, setShowModal } = props;

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <>
            {showFlag &&  
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-10 shadow-md p-16 z-10 rounded-lg">
                    <p className="text-emerald-300 font-bold mb-4 text-4xl">新規登録</p>
                    <input
                        className="mr-8 mb-8 h-12"
                        value={task}
                        placeholder="タスク名"
                        onChange={onChange}
                    />
                    <div>
                        <button className="bg-green-400 text-white rounded-lg mr-8 p-3 px-4 hover:bg-[#b4e4b4]" type="submit" onClick={onClickAdd}>
                        保存
                        </button>
                        <button className="text-white bg-slate-300 rounded-lg p-3 hover:bg-[#37352f14]" onClick={closeModal}>キャンセル</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;
