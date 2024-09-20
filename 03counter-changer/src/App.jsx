
import { useState } from 'react';
import './App.css'

import React from 'react'


function App() {
  let [counter,setCounter] = useState(0);
  // let counter = 5;
  const addValue = () => {
    if(counter < 20) {
      counter += 1;
    setCounter(counter);
    console.log("value added",counter)
    }
    
  }
  const subtractValue = () => {
    if(counter > 0) {
      counter -= 1;
      setCounter(counter);
      console.log("value subtracted",counter)
    }
  }
  return (
    <>
      <h1>Counter Changer</h1>
      <h2>Counter Value : {counter} </h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <button
        onClick={subtractValue}
      >Remove Value</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
