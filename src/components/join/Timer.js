import React, {useState, useEffect} from "react";

const Timer = (props) => {
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

function toggle(){
  setIsActive(!isActive);
}

function reset() {
  setSeconds(30);
  setIsActive(false);
}


useEffect(() => {
  let interval = null;
  if (isActive) {
    interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
  } else if (isActive && seconds === 0) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [isActive, seconds]);

return (
  <div>
    <div className="time">
      {seconds}s
    </div>
    <div className="row">
      <button onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
  </div>
);
};

export default Timer;