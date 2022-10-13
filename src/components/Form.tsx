import React, { FormEvent, useState } from "react"
import HouseComponent from "./HouseComponent"
import ResultTable from "./ResultTable"

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

  const [previous, setPrevious] = useState<number>(0)
  const [present, setPresent] = useState<number>(0)

  const totalConsumption = totalReading.present - totalReading.previous
  const pesoper = Math.round(totalReading.bill / totalConsumption)

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    const consumption = present - previous
    const bill = consumption * pesoper

    setHouseReadings([
      {
        name: "House A",
        previous,
        present,
        consumption,
        bill
      }
    ])
    console.log({ totalReading, consumption, pesoper })
  }

  return (
    <>
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Bill Compute App
        </h3>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0"></div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <form className="w-full max-w-lg justify-center" onSubmit={formHandler}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Previous Reading
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Previous Reading"
              value={totalReading.previous}
              onChange={(e) =>
                setTotalReading({
                  ...totalReading,
                  previous: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Present Reading
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Present Reading"
              value={totalReading.present}
              onChange={(e) =>
                setTotalReading({
                  ...totalReading,
                  present: Number(e.target.value)
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="total-bill"
            >
              Total Bill
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="total-bill"
              type="number"
              placeholder="Total Bill"
              value={totalReading.bill}
              onChange={(e) =>
                setTotalReading({
                  ...totalReading,
                  bill: Number(e.target.value)
                })
              }
            />
          </div>
        </div>
        <HouseComponent
          present={present}
          previous={previous}
          setPresent={setPresent}
          setPrevious={setPrevious}
        />

        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>

      <ResultTable houseReadings={houseReadings} pesoper={pesoper} />
    </>
  )
}

export default Form
