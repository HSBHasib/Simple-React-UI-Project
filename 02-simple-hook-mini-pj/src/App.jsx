import React, { useState } from 'react'

const App = () => {

  const [num, setCount] = useState(0)
  
  function numIncrease() {
    setCount(num + 1);
  }
  
  function numDecrease() {
    setCount(num - 1);
  }

  function numIncecreaseByfive() {
    setCount(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={numIncrease}>Increase</button>
      <button onClick={numDecrease}>decrease</button>
      <button onClick={numIncecreaseByfive}>Increase By 5</button>
    </div>
  )
}

export default App
