import { useState } from "react";
import "./App.css";
// import React from 'react'

export default function App() {
  let [counter, setCounter] = useState(15);
  // const addValue = () => {
  //   if (counter < 20) {
  //     counter++;
  //     setCounter(counter);
  //   } else {
  //     alert(`you can't add  more than 20`);
  //   }
  // };


  const addValue =()=>{
// this will not increase the value by 4 because we're incrementing the same value 4 times and as we know react uses fiber which updates in bulk hence it will only update the value for once.
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)



// this will update value by 4 as were using arrow function which is invoked 4 times which means it adds the values each times its called
    setCounter(prevCounter => prevCounter+1)  
    setCounter(prevCounter => prevCounter+1)  
    setCounter(prevCounter => prevCounter+1)  
    setCounter(prevCounter => prevCounter+1)  

    

  }

  const decValue =()=>{
    setCounter(prevCounter => prevCounter-1)  
    setCounter(prevCounter => prevCounter-1)  
    setCounter(prevCounter => prevCounter-1)  
  }

  // const decValue = () => {
  //   if (counter > 0) {
  //     counter--;
  //     setCounter(counter);
  //   }else{
  //     alert(`you can't decrease value  below zero`)
  //   }
  // };

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Remove value</button>
    </>
  );
}
