import React, { useEffect, useState } from "react"
import HouseCard from "./components/HouseCard"
import AreaChart from "./components/AreaChart"
import TenantTable from "./components/TenantTable"
import client from "axiosClient/client"
import { AxiosError, AxiosResponse } from "axios"
import PageLayout from "layouts/PageLayout"
import TotalHouseReadings from "./components/TotalHouseReadings"
import { getAllHouses } from "redux/houseSlice"
import { useAppDispatch, useAppSelector } from "store"
import { BsFilter } from "react-icons/bs"
import ActiveReadingsTable from "./components/ActiveReadings"

const Dashboard = () => {
  const [electricData, setElectricData] = useState<number[]>([])
  const [waterData, setWaterData] = useState<number[]>([])
  const dispatch = useAppDispatch()
  const { allHouses } = useAppSelector((state) => state.houses)

  useEffect(() => {
    dispatch(getAllHouses())
  }, [dispatch])

  useEffect(() => {
    client
      .get("yearly-bills/")
      .then((res: AxiosResponse) => {
        const electric = res.data
          .filter((e: any) => e.bill_type === "electric")
          .map((c: any) => c.bill)
        setElectricData(electric)
      })
      .catch((err: AxiosError) => console.log(err))

    client
      .get("yearly-bills/")
      .then((res: AxiosResponse) => {
        const water = res.data
          .filter((e: any) => e.bill_type === "water")
          .map((c: any) => c.bill)
        setWaterData(water)
      })
      .catch((err: AxiosError) => console.log(err))
  }, [])

  return (
    <>
      <PageLayout title="Dashboards">
        {/* Cards */}
        <div className="grid gap-6 mb-8 grid-cols-2 md:grid-cols-4 content-center">
          {allHouses
            ?.filter((h) => h.name !== "Main" && h.name !== "WholeHouse")
            .map((house) => (
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
              fillColor="rgba(0,87,0,0.3)"
            />
            <AreaChart
              datasets={waterData}
              label="Water Bill"
              color="blue"
              fillColor="rgba(0,0,51,0.5)"
            />
          </div>
        </div>
        <TotalHouseReadings />
        <ActiveReadingsTable />
        <TenantTable />
      </PageLayout>
    </>
  )
}

export default Dashboard
