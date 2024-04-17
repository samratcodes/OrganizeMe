import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='flex bg-black w-full h-screen'>
    <Sidebar/>
  <Home/>
  </div>

  )
}

export default App
