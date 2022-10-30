import React, { useEffect, useState } from "react"
import { electricData, waterData } from "./chartData"
import HouseCard from "./components/HouseCard"
import AreaChart from "./components/AreaChart"
import TenantTable from "./components/TenantTable"
import client from "../../../axiosClient/client"
// import client from "../../../axiosClient"
import { IHouse } from "../../../interfaces"
import { AxiosError, AxiosResponse } from "axios"

const Dashboard = () => {
  const [houses, setHouses] = useState<IHouse[]>([])

  useEffect(() => {
    client
      .get("houses/")
      .then((res: AxiosResponse) => setHouses(res.data))
      .catch((err: AxiosError) => console.log(err))
  }, [])

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
          <AreaChart
            datasets={electricData}
            label="Electric Bill"
            color="green"
          />
          <AreaChart datasets={waterData} label="Water Bill" color="blue" />
        </div>
      </div>

      <h3 className="my-6 text-xl font-semibold">Active Tenants</h3>
      <TenantTable />
    </>
  )
}

export default Dashboard
