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
    </>
  )
}

export default TotalReading
