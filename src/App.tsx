import React, { useState } from "react"
import SideBar from "./layouts/SideBar"
import Main from "./views/pages/Main"
import Header from "./layouts/Header"
import { GiHamburgerMenu } from "react-icons/gi"

function App() {
  const [theme, setTheme] = useState<string>("halloween")
  return (
    <>
      <div className="drawer" data-theme={theme}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer"
            className="top-4 left-4 relative btn btn-primary drawer-button"
          >
            <GiHamburgerMenu size={30} />
          </label>
          {/* <Header /> */}
          <Main />
        </div>
        <SideBar />
      </div>
    </>
  )
}

export default App
