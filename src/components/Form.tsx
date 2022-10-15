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

              <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-medium">
                    Submit
                  </span>
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
