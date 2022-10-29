import React from "react"
import { electricData, waterData } from "./chartData"
import HouseCard from "./components/HouseCard"
import LineChart from "./components/LineChart"
import TenantTable from "./components/TenantTable"

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
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
      <h3 className="my-6 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Yearly Consumptions
      </h3>
      <LineChart data={electricData} />
      <LineChart data={waterData} />

      <h3 className="my-6 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Active Tenants
      </h3>
      <TenantTable />
    </>
  )
}

export default Dashboard
