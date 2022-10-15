import React, { FormEvent, useState } from "react"
import HouseComponent from "./HouseComponent"
import ResultTable from "./ResultTable"
import TotalReading from "./TotalReading"

export interface Reading {
  name: string
  previous: number
  present: number
  consumption: number
  bill: number
}

const Form = () => {
  const [totalReading, setTotalReading] = useState<Reading>({
    name: "main",
    previous: 0,
    present: 0,
    consumption: 0,
    bill: 0
  })

  const [houseReadings, setHouseReadings] = useState<Reading[]>([])

  const [houseAPrevious, setHouseAPrevious] = useState<number>(0)
  const [houseAPresent, setHouseAPresent] = useState<number>(0)
  const [houseBPrevious, setHouseBPrevious] = useState<number>(0)
  const [houseBPresent, setHouseBPresent] = useState<number>(0)

  const totalConsumption = totalReading.present - totalReading.previous
  const pesoper = Math.round(totalReading.bill / totalConsumption)

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    const houseAConsumption = houseAPresent - houseAPrevious
    const houseABill = houseAConsumption * pesoper
    const houseBConsumption = houseBPresent - houseBPrevious
    const houseBBill = houseBConsumption * pesoper

    setHouseReadings([
      {
        name: "House A",
        previous: houseAPrevious,
        present: houseAPresent,
        consumption: houseAConsumption,
        bill: houseABill
      },
      {
        name: "House B",
        previous: houseBPrevious,
        present: houseBPresent,
        consumption: houseBConsumption,
        bill: houseBBill
      }
    ])
  }

  return (
    <>
      <div>
        <div className="flex justify-center bg-gray-50">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              className="w-full max-w-lg justify-center"
              onSubmit={formHandler}
            >
              <TotalReading
                totalReading={totalReading}
                setTotalReading={setTotalReading}
              />
              <HouseComponent
                name="House A"
                present={houseAPresent}
                previous={houseAPrevious}
                setPresent={setHouseAPresent}
                setPrevious={setHouseAPrevious}
              />
              <HouseComponent
                name="House B"
                present={houseBPresent}
                previous={houseBPrevious}
                setPresent={setHouseBPresent}
                setPrevious={setHouseBPrevious}
              />

              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center">
          <ResultTable houseReadings={houseReadings} pesoper={pesoper} />
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  )
}

export default Form
