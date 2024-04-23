import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomDesignPage from './RandomDesignPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Test for committ</p>
      <h2>Hello Universe</h2>
     <RandomDesignPage/>
    </>
  )
}

export default App
