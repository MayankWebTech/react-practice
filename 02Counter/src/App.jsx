import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] = useState(0)

 const addValue =() =>{

  console.log("clicked", counter)
  /* setCounter(Math.min(counter,20))
  setCounter((counter) =>{
    if(counter >= 20){
     return  counter 
    }
    else{
      return counter +1
    }
 })*/
 setCounter((counter) => counter >= 20 ? counter : counter+1)
 }

 const removeValue =() =>{
  /* setCounter(Math.max((counter-1), 0))*/
  console.log("clicked", counter)
  setCounter((counter)=> counter <= 0 ? counter : counter-1)
}

  return (
    <>
     <h1>Welcome to react</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue}>Add Value </button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
