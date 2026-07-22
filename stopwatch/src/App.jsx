import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  let elapsed = time && now ? (time - now) / 1000 : 0;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor((elapsed / 60) % 60);
  let hours = Math.floor(elapsed / 3600);

  return (
    <>
      <div className="App">
        <h1>Stopwatch</h1>
        <h2>
          {String(hours).padStart(2, '0')} :{String(minutes).padStart(2, '0')} :
          {String(seconds).padStart(2, '0')}
        </h2>
        <div>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default App;
