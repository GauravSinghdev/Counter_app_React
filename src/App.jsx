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

  function reduce()
  {
    if(count=== 0) return;
    setCount(count - 1);
  }


  return (
    <>
      <h1>Counter <span onClick={add} style={{textDecoration: "underline", cursor: "pointer"}}>increase</span> or <span onClick={reduce} style={{textDecoration: "underline", cursor: "pointer"}}>decrease</span> {count}</h1>
    </>
  )
}

export default App
