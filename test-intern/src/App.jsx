import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Components/section1/Parent'
import Debounce from './Components/section1/Debounce'
import Todo from './Components/section1/Todo'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import InputComponent from './Input'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Parent /> */}
 {/* <Debounce /> */}
 {/* <Todo /> */}
 {/* below is for url filter task */}
<BrowserRouter>
<InputComponent /></BrowserRouter>

    </>
  )
}

export default App
