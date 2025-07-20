import './App.css'
import Header from './components/Header'
import Body from './components/Body'

import logo from "./assets/logo.png"
import image from "./assets/main_banner.png"

import { useState } from 'react'


function App() {

  const [data, setData] = useState([{
    name: "",
    email: "",
    message: "",
  }])

  

  

  return (
    <div>
      <Header logo={logo}/>
      <Body image={image} add={setData}/>
    </div>
  )
}

export default App
