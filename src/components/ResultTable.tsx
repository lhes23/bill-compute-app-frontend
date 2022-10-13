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
      <table className="table-auto">
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
      </table>
    </>
  )
}

export default ResultTable
