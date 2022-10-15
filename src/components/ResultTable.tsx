import React from "react"
import { Reading } from "./Form"

const ResultTable = ({
  houseReadings,
  pesoper
}: {
  houseReadings: Reading[]
  pesoper: number
}) => {
  return (
    <>
      {/* <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">House</th>
            <th className="px-4 py-2">Previous Reading</th>
            <th className="px-4 py-2">Present Reading</th>
            <th className="px-4 py-2">Consumption</th>
            <th className="px-4 py-2">Peso Per Consumption</th>
            <th className="px-4 py-2">Bill</th>
          </tr>
        </thead>
        <tbody>
          {houseReadings.map((house) => (
            <tr>
              <td className="border px-4 py-2">{house.name}</td>
              <td className="border px-4 py-2">{house.previous}</td>
              <td className="border px-4 py-2">{house.present}</td>
              <td className="border px-4 py-2">{house.consumption}</td>
              <td className="border px-4 py-2">₱ {pesoper}</td>
              <td className="border px-4 py-2">₱ {house.bill}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <div className="flex justify-center">
        {houseReadings.map((house) => (
          <>
            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-4">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h2>Due Date:</h2>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {house.name}
                </h5>
                <div className="grid grid-cols-2">
                  <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Previous Reading :{" "}
                  </div>
                  <div className="text-gray-700">{house.previous}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Present Reading :{" "}
                  </div>
                  <div className="text-gray-700">{house.present}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Consumption :{" "}
                  </div>
                  <div className="text-gray-700">{house.consumption}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Peso per Consumption :{" "}
                  </div>
                  <div className="text-gray-700">₱ {pesoper}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Total Bill :{" "}
                  </div>
                  <div className="text-gray-700 font-bold text-2xl">
                    ₱ {house.bill}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default ResultTable
