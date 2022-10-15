import React from "react"
import { Reading } from "./Form"

const TotalReading = ({
  totalReading,
  setTotalReading
}: {
  totalReading: Reading
  setTotalReading: React.Dispatch<React.SetStateAction<Reading>>
}) => {
  return (
    <>
      <h2 className="p-2">Kinds of Bill</h2>
      <fieldset className="flex justify-evenly">
        <legend className="sr-only">Kinds of Bill</legend>
        <div className="flex items-center mb-4">
          <input
            id="electric"
            type="radio"
            name="bill"
            defaultValue="Electric"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            defaultChecked
          />
          <label
            htmlFor="electric"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Electric Bill
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="water"
            type="radio"
            name="bill"
            defaultValue="Water"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="water"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Water
          </label>
        </div>
      </fieldset>

      <h2 className="p-2">Total Reading</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 mt-2 mb-2">
          <div className="relative">
            <input
              type="text"
              id="previous_reading"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Previous Reading"
              value={totalReading.previous}
              onChange={(e) =>
                setTotalReading({
                  ...totalReading,
                  previous: Number(e.target.value)
                })
              }
            />
            <label
              htmlFor="previous_reading"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Previous Reading
            </label>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mt-2 mb-2">
          <div className="relative">
            <input
              type="text"
              id="present_reading"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Present Reading"
              value={totalReading.present}
              onChange={(e) =>
                setTotalReading({
                  ...totalReading,
                  present: Number(e.target.value)
                })
              }
            />
            <label
              htmlFor="present_reading"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Present Reading
            </label>
          </div>
        </div>
      </div>

      <h2 className="p-2">Total Bill</h2>
      <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
          <div className="relative">
            <input
              type="number"
              id="total_reading"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Total Bill"
              value={totalReading.bill}
              onChange={(e) =>
                setTotalReading({
                  ...totalReading,
                  bill: Number(e.target.value)
                })
              }
            />
            <label
              htmlFor="total_reading"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Total Bill
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default TotalReading
