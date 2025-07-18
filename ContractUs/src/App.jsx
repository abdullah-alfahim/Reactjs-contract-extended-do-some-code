import './App.css'
import Header from './components/Header'
import Body from './components/Body'

import logo from "./assets/logo.png"



function App() {

  return (
    <div>
      <Header logo={logo}/>
      <Body/>
    </div>
  )
}

export default App
