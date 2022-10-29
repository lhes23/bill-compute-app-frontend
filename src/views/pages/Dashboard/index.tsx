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
      <h2 className="my-6 text-2xl font-semibold">Dashboard</h2>

      {/* Cards */}
      <div className="grid gap-6 mb-8 grid-cols-2 md:grid-cols-4 content-center">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>

      <div>
        <h3 className="my-6 text-xl font-semibold">Yearly Consumptions</h3>
        <div className="md:grid grid-cols-2">
          <LineChart data={electricData} />
          <LineChart data={waterData} />
        </div>
      </div>

      <h3 className="my-6 text-xl font-semibold">Active Tenants</h3>
      <TenantTable />
    </>
  )
}

export default Dashboard
