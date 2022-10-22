import React, { useState } from "react"
import Dashboard from "../Dashboard"
import { Routes, Route } from "react-router-dom"
import HouseForm from "../HouseForm"
import { Reading } from "../../../interfaces"

const Main = () => {
  const [houseReadings, setHouseReadings] = useState<Reading[]>([])
  const [pesoper, setPesoPer] = useState<number>(0)

  console.log({ houseReadings, pesoper })

  return (
    <>
      <main className="h-full container">
        <div className="px-6 mx-auto grid">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/add-reading"
              element={
                <HouseForm
                  setHouseReadings={setHouseReadings}
                  setPesoPer={setPesoPer}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default Main
