import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setCount(0);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    const isNotNumber = isNaN(value);
    if (isNotNumber) return alert("数字を入力してください");
    setCount(value);
  };

  return (
    <div className="flex flex-col items-center mt-[20vh]">
      <h1 className="text-5xl mb-[30px]">CountDownTimer</h1>
      <div>
        <input
          className="text-center text-4xl"
          type="text"
          id="countInput"
          value={count}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex gap-2.5 mt-[20px]">
        <button onClick={handleStart}>開始</button>
        <button onClick={handlePauseResume} disabled={!isActive}>
          {isPaused ? "再開" : "一時停止"}
        </button>
        <button onClick={handleReset}>リセット</button>
      </div>
    </div>
  );
}

export default App;
