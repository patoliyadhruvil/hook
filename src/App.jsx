import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainCom from './components/MainCom/MainCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainCom/>
    </>
  )
}

export default App
