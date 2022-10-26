import React, { useState } from "react"
import SideBar from "./layouts/SideBar"
import Main from "./views/pages/Main"
import Header from "./layouts/Header"

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  console.log(showSidebar)

  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
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
