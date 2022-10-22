import React, { useState } from "react"
import TableDatePicker from "./components/TableDatePicker"
import ResultTable from "./components/ResultTable"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import Header from "./components/Header"

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  console.log(showSidebar)

  return (
    <>
      {/* <div className="">
        <TableDatePicker />
        <div className="flex justify-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Bill Compute App
          </h3>
        </div>
        <Form setHouseReadings={setHouseReadings} setPesoPer={setPesoPer} />
        <div className="">
          <ResultTable houseReadings={houseReadings} pesoper={pesoper} />
        </div>
      </div> */}

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
