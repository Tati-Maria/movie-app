//Api key 438cbfe3c6712fed71652cd0dde3e14b

import {Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
