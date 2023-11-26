import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const initialState = [
    {
      task: "Learn vue.js",
      isCompleted: false,
    },
    {
      task: "Learn React Hook",
      isCompleted: false,
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false,
    },
  ];
  const onClickAdd = () => {
    if (task === "") return alert("タスクを入力してください");
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask("");
    setShowModal(false)
  };
  const onChange = (event) => {
    setTask(event.target.value);
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const [todos, setTodos] = useState(initialState);
  const [task, setTask] = useState("");
  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={`overlay ${showModal ? "overlay-visible" : ""}`}>
        <div className="flex flex-col justify-center items-center mt-9 min-h-full">
          <div className="w-96 text-center bg-emerald-300 ">
            <h1 className="text-3xl p-8 text-white p-2">TODO List</h1>
          </div>
          <div className="w-96 text-center bg-neutral-200">
            <ul>
              {todos.map((todo, index) => (
                <li
                  className="my-7 flex "
                  key={index}
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  <input
                    className="mx-6"
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => onClickComplete(index)}
                  />
                  <span className="flex-grow">{todo.task}</span>
                  <span
                    className="ml-6 px-1 bg-white rounded-full mr-8 "
                    onClick={() => onClickDelete(index)}
                  >
                    ×
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="px-1 bg-emerald-300 rounded-full hover:bg-[#b4e4b4]"
              onClick={ShowModal}
            >
              ＋
            </button>
          </div>
        </div>
      </div>
      <Modal
        task={task}
        onChange={onChange}
        onClickAdd={onClickAdd}
        showFlag={showModal}
        setShowModal={setShowModal}
      />
      {showModal && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"></div>}
    </>
  );
}

export default App;
