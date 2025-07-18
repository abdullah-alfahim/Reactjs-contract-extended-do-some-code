import './App.css'
import Header from './components/Header'
import Body from './components/Body'

import logo from "./assets/logo.png"
import image from "./assets/main_banner.png"


function App() {

  return (
    <div>
      <Header logo={logo}/>
      <Body image={image}/>
    </div>
  )
}

export default App
