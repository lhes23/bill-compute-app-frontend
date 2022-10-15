import React, { useState } from "react"
import Form from "./components/Form"
import ResultTable from "./components/ResultTable"

export interface IHouse {
  name: string
  previous: number
  present: number
}

export interface Reading extends IHouse {
  consumption: number
  bill: number
}

function App() {
  const [houseReadings, setHouseReadings] = useState<Reading[]>([])
  const [pesoper, setPesoPer] = useState<number>(0)

  return (
    <div className="">
      <div className="flex justify-center">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Bill Compute App
        </h3>
      </div>
      <Form setHouseReadings={setHouseReadings} setPesoPer={setPesoPer} />
      <div className="flex justify-center">
        <ResultTable houseReadings={houseReadings} pesoper={pesoper} />
      </div>
    </div>
  )
}

export default App
