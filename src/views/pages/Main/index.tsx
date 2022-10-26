import React, { useState, useEffect } from "react"
import Dashboard from "../Dashboard"
import { Routes, Route } from "react-router-dom"
import HouseForm from "../HouseForm"
import { Reading } from "../../../interfaces"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { setHousesReadings } from "../../../redux/houseSlice"
import ResultTable from "../ResultTable"

const Main = () => {
  const dispatch = useDispatch()
  const store = useSelector((store: RootState) => store.houses)

  const [houseReadings, setHouseReadings] = useState<Reading[]>([])
  const [pesoper, setPesoPer] = useState<number>(0)

  console.log(store)

  console.log({ houseReadings, pesoper })

  useEffect(() => {
    dispatch(setHousesReadings(houseReadings))
  }, [dispatch, houseReadings])

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
            <Route
              path="/result"
              element={
                <ResultTable houseReadings={houseReadings} pesoper={pesoper} />
              }
            />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default Main
