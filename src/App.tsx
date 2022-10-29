import React from "react"
import SideBar from "./layouts/SideBar"
import Main from "./views/pages/Main"
import Header from "./layouts/Header"

function App() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
