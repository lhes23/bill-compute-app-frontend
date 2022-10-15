import React, { FormEvent, useState } from "react"
import { IHouse, Reading } from "../App"
import HouseComponent from "./HouseComponent"
import TotalReading from "./TotalReading"

interface IProps {
  setHouseReadings: React.Dispatch<React.SetStateAction<Reading[]>>
  setPesoPer: React.Dispatch<React.SetStateAction<number>>
}

const Form = ({ setHouseReadings, setPesoPer }: IProps) => {
  const [totalReading, setTotalReading] = useState<Reading>({
    name: "main",
    previous: 0,
    present: 0,
    consumption: 0,
    bill: 0
  })

  const [houseA, setHouseA] = useState<IHouse>({
    name: "House A",
    previous: 0,
    present: 0
  })
  const [houseB, setHouseB] = useState<IHouse>({
    name: "House B",
    previous: 0,
    present: 0
  })
  const [houseC, setHouseC] = useState<IHouse>({
    name: "House C",
    previous: 0,
    present: 0
  })
  const [houseD, setHouseD] = useState<IHouse>({
    name: "House D",
    previous: 0,
    present: 0
  })

  const totalConsumption = totalReading.present - totalReading.previous
  const pesoper = Math.round(totalReading.bill / totalConsumption)

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    // const houseAConsumption = houseAPresent - houseAPrevious
    // const houseABill = houseAConsumption * pesoper
    // const houseBConsumption = houseBPresent - houseBPrevious
    // const houseBBill = houseBConsumption * pesoper

    const houseAConsumption = houseA.present - houseA.previous
    const houseABill = houseAConsumption * pesoper
    const houseBConsumption = houseB.present - houseB.previous
    const houseBBill = houseBConsumption * pesoper
    const houseCConsumption = houseC.present - houseC.previous
    const houseCBill = houseCConsumption * pesoper
    const houseDConsumption = houseD.present - houseD.previous
    const houseDBill = houseDConsumption * pesoper

    setPesoPer(pesoper)
    setHouseReadings([
      {
        name: houseA.name,
        previous: houseA.previous,
        present: houseA.present,
        consumption: houseAConsumption,
        bill: houseABill
      },
      {
        name: houseB.name,
        previous: houseB.previous,
        present: houseB.present,
        consumption: houseBConsumption,
        bill: houseBBill
      },
      {
        name: houseC.name,
        previous: houseC.previous,
        present: houseC.present,
        consumption: houseCConsumption,
        bill: houseCBill
      },
      {
        name: houseD.name,
        previous: houseD.previous,
        present: houseD.present,
        consumption: houseDConsumption,
        bill: houseDBill
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

              <HouseComponent house={houseA} setHouse={setHouseA} />
              <HouseComponent house={houseB} setHouse={setHouseB} />
              <HouseComponent house={houseC} setHouse={setHouseC} />
              <HouseComponent house={houseD} setHouse={setHouseD} />

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
