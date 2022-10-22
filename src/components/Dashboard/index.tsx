import React from "react"
import Card from "../Card"
import ConsumptionChart from "../ConsumptionChart"
import TenantTable from "../TenantTable"

export interface IHouse {
  id: string
  name: string
  isOccupied: boolean
  color: string
}
export const houses = [
  { id: "1", name: "House A", isOccupied: true, color: "green" },
  { id: "2", name: "House B", isOccupied: false, color: "orange" },
  { id: "3", name: "House C", isOccupied: false, color: "blue" },
  { id: "4", name: "House D", isOccupied: true, color: "red" }
]

const Dashboard = () => {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>

      {/* Cards */}
      <div className="grid gap-6 mb-8 grid-cols-2 md:grid-cols-4">
        {houses.map((house) => (
          <Card house={house} />
        ))}
      </div>
      <ConsumptionChart />
      <TenantTable />
    </>
  )
}

export default Dashboard
