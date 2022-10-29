import React, { useState } from "react"
import SideBar from "./layouts/SideBar"
import Main from "./views/pages/Main"
import Header from "./layouts/Header"

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  return (
    <>
      <div className="flex h-screen">
        <SideBar showSidebar={showSidebar} />
        <div className="flex flex-col flex-1 w-full">
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
