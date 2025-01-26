import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(60);
    setIsRunning(false);
  };

  return (
    <>
      <div className="w-[30%] bg-[#914CBE] rounded-lg p-4 mx-auto my-48 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-5xl font-bold text-[#0F0328]">Countdown: {time}s</h1>
        <div className="space-x-4">
          <button
            onClick={startTimer}
            className={`px-5 py-2 rounded-lg text-2xl ${
              isRunning
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            onClick={pauseTimer}
            className="px-5 text-2xl py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Pause
          </button>
          <button
            onClick={resetTimer}
            className="px-5 text-2xl py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
