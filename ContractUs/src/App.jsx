import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import View from './components/View'

import logo from "./assets/logo.png"
import image from "./assets/main_banner.png"

import { useState } from 'react'
import { Outlet } from 'react-router'

function App() {

  const [data, setData] = useState([ ])

  



  return (
    <div>
      <Header logo={logo}/>
      <Outlet context={{ data, setData, image }}/>
    </div>
  )
}

export default App
