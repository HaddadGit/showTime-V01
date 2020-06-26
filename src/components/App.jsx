import React, { useState } from "react";
import TimeNow from "./TimeNow";
function App() {
  const [time, setTime] = useState(TimeNow);

  function updateTime() {
    setTime(TimeNow);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1 style={{ fontSize: "45px" }}>{time}</h1>
    </div>
  );
}

export default App;
