import React, { useEffect } from "react"
import HouseCard from "./components/HouseCard"
import AreaChart from "./components/AreaChart"
import TenantTable from "./components/TenantTable"
import PageLayout from "layouts/PageLayout"
import TotalHouseReadings from "./components/TotalHouseReadings"
import { getAllHouses, getAllYearlyBills } from "redux/houseSlice"
import { useAppDispatch, useAppSelector } from "store"
import ActiveReadingsTable from "./components/ActiveReadings"

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const { allHouses, allYearlyBills } = useAppSelector((state) => state.houses)

  useEffect(() => {
    dispatch(getAllHouses())
    dispatch(getAllYearlyBills())
  }, [dispatch])

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
              datasets={allYearlyBills.filter(
                (m) => m.bill_type === "Electric"
              )}
              label="Electric Bill"
              color="green"
              fillColor="rgba(0,87,0,0.3)"
            />
            <AreaChart
              datasets={allYearlyBills.filter((m) => m.bill_type === "Water")}
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
