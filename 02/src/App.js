import {useState } from 'react'

function App() {
  const [num,setNum] = useState(0)
  const onClick = () =>{
    setNum(num + 1)
  }
  const onDecrement = () =>{
    setNum(num - 1);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center shadow-black ">
      <h1 className="mb-10 text-6xl text-zinc-500">React Counter</h1>
      <p className="mb-10 text-7xl">{num}</p>
      <div className="flex gap-14 text-7xl">
        <div className="bg-blue-500 rounded-full">
          <button onClick={onClick} className="px-3">+</button>
        </div>
        <div className="bg-red-500 rounded-full">
          <button onClick={onDecrement} className="px-5">-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
