import {useState} from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5) 
  


  const addValue = () => {
      console.log(counter)
      setCounter(counter + 1)
      console.log(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1> Counter Website</h1>
      <p> Made by ihba</p>

      <h3> Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      
    </>
  )
}

export default App
