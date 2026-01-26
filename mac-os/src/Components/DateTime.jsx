import React from "react";

import { useState, useEffect } from "react";

function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // updates every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div>
      <p>{currentDateTime.toLocaleString()}</p>
    </div>
  );
}

export default DateTime;
