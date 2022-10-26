import React from "react"
import Dashboard from "../Dashboard"
import { Routes, Route } from "react-router-dom"
import HouseForm from "../HouseForm"
import ResultTable from "../ResultTable"

const Main = () => {
  return (
    <>
      <main className="h-full container  bg-gray-50 dark:bg-gray-900">
        <div className="px-6 mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-reading" element={<HouseForm />} />
            <Route path="/result" element={<ResultTable />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default Main
