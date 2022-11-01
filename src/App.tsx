import React, { useState } from "react"
import Main from "./views/pages/Main"
import Header from "./layouts/Header"

function App() {
  const [theme, setTheme] = useState<string>("light")

  return (
    <>
      <div className="drawer" data-theme={theme}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header setTheme={setTheme} />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
