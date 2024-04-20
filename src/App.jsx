import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function add()
  {
    setCount(count + 1);
  }
  return (
    <>
      <h1 onClick={add} style={{cursor:'pointer'}}>Counter {count}</h1>
    </>
  )
}

export default App
