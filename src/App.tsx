import React, { useEffect, useState } from "react"
import Main from "./views/pages/Main"
import Header from "./layouts/Header"

function App() {
  const [theme, setTheme] = useState<string>("halloween")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/houses/")
      const d = await res.json()
      setData(d)
    }
    fetchData()
  }, [])

  console.log(data.map((d) => d))
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
