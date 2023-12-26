import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card"

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "mayank",
    age: 21
  }

  return (
    <>
      <h1 className="bg-blue-400 text-black p-4 rounded-xl mb-4" >Tailwind CSS Test</h1>

     <Card name="card1" btnText="Click me" />;
     <Card name="card2" />
  
    </>
  )
}

export default App
