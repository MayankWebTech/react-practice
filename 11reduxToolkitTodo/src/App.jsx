

import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'

function App() {
  return (
    <>
      <h1>Learn redux - toolkit</h1>
      <AddTodo /> 
      <Todos />
    </>
  )
}

export default App
