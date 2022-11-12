import React, { FormEvent, useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import { IHouseReading } from "interfaces"
import {
  getAllHouses,
  setHousesReadings,
  setPesoPer,
  setTotalReadings
} from "redux/houseSlice"
import HouseComponent from "./components/HouseComponent"
import TotalReading from "./components/TotalReading"
import PageLayout from "layouts/PageLayout"
import { useAppDispatch, useAppSelector } from "store"
import { getActiveTenants } from "redux/tenantSlice"

const HouseForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { houses, tenants } = useAppSelector((state) => state)
  const { allHouses, totalReadings } = houses

  useEffect(() => {
    dispatch(getAllHouses())
    dispatch(getActiveTenants())
  }, [dispatch])

  const [dueDateLocal, setDueDateLocal] = useState<Date>(new Date())
  const [startDateLocal, setStartDateLocal] = useState<Date>(new Date())
  const [endDateLocal, setEndDateLocal] = useState<Date>(new Date())

  const getHouseId = (house: string) => {
    return allHouses?.filter((h) => h.name === house).map((n) => n.id)
  }

  const getTenantName = (houseId: number) => {
    return tenants.activeTenants
      .filter((t) => t.house_id === houseId)
      .map((n) => n.name)
  }

  const [houseA, setHouseA] = useState<IHouseReading>({
    name: "House A",
    house_id: 0,
    tenant: "",
    tenant_id: 0,
    previous: 0,
    present: 0
  })

  const [houseB, setHouseB] = useState<IHouseReading>({
    name: "House B",
    house_id: 0,
    tenant: "",
    tenant_id: 0,
    previous: 0,
    present: 0
  })
  const [houseC, setHouseC] = useState<IHouseReading>({
    name: "House C",
    house_id: 0,
    tenant: "",
    tenant_id: 0,
    previous: 0,
    present: 0
  })
  const [houseD, setHouseD] = useState<IHouseReading>({
    name: "House D",
    house_id: 0,
    tenant: "",
    tenant_id: 0,
    previous: 0,
    present: 0
  })
  const [houseMain, setHouseMain] = useState<IHouseReading>({
    name: "Main",
    house_id: getHouseId("Main")[0],
    tenant: getTenantName(getHouseId("Main")[0])[0],
    tenant_id: 0,
    previous: 0,
    present: 0
  })

  const totalConsumption = totalReadings.present - totalReadings.previous
  const pesoper = Math.round(totalReadings.bill / totalConsumption)

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    const houseAConsumption = houseA.present - houseA.previous
    const houseABill = houseAConsumption * pesoper
    const houseBConsumption = houseB.present - houseB.previous
    const houseBBill = houseBConsumption * pesoper
    const houseCConsumption = houseC.present - houseC.previous
    const houseCBill = houseCConsumption * pesoper
    const houseDConsumption = houseD.present - houseD.previous
    const houseDBill = houseDConsumption * pesoper

    const houseMainConsumption =
      totalConsumption -
      (houseAConsumption +
        houseBConsumption +
        houseCConsumption +
        houseDConsumption)
    const houseMainBill =
      totalReadings.bill - (houseABill + houseBBill + houseCBill + houseDBill)

    // Save Dates on Redux
    dispatch(
      setTotalReadings({
        ...totalReadings,
        dueDate: dueDateLocal.toDateString(),
        startDate: startDateLocal.toDateString(),
        endDate: endDateLocal.toDateString()
      })
    )

    // Save pesoPer on Redux
    dispatch(setPesoPer(pesoper))

    // Save the Readings
    dispatch(
      setHousesReadings([
        {
          name: houseA.name,
          tenant: houseA?.tenant,
          previous: houseA.previous,
          present: houseA.present,
          consumption: houseAConsumption,
          bill: houseABill
        },
        {
          name: houseB.name,
          tenant: houseB?.tenant,
          previous: houseB.previous,
          present: houseB.present,
          consumption: houseBConsumption,
          bill: houseBBill
        },
        {
          name: houseC.name,
          tenant: houseC?.tenant,
          previous: houseC.previous,
          present: houseC.present,
          consumption: houseCConsumption,
          bill: houseCBill
        },
        {
          name: houseD.name,
          tenant: houseD?.tenant,
          previous: houseD.previous,
          present: houseD.present,
          consumption: houseDConsumption,
          bill: houseDBill
        },
        {
          name: houseMain.name,
          tenant: houseMain?.tenant,
          previous: totalReadings.previous,
          present: totalReadings.present,
          consumption: houseMainConsumption,
          bill: Number(houseMainBill).toFixed(2)
        }
      ])
    )

    navigate("/result")
  }

  return (
    <>
      <PageLayout title="Add a Reading">
        <div className="flex justify-center">
          <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md md:w-[50vw]">
            <TotalReading
              dueDateLocal={dueDateLocal}
              setDueDateLocal={setDueDateLocal}
              startDateLocal={startDateLocal}
              setStartDateLocal={setStartDateLocal}
              endDateLocal={endDateLocal}
              setEndDateLocal={setEndDateLocal}
            />

            <HouseComponent
              house={houseA}
              setHouse={setHouseA}
              tenantName={getTenantName(getHouseId("House A")[0])[0]}
            />
            <HouseComponent
              house={houseB}
              setHouse={setHouseB}
              tenantName={getTenantName(getHouseId("House B")[0])[0]}
            />
            <HouseComponent
              house={houseC}
              setHouse={setHouseC}
              tenantName={getTenantName(getHouseId("House C")[0])[0]}
            />
            <HouseComponent
              house={houseD}
              setHouse={setHouseD}
              tenantName={getTenantName(getHouseId("House D")[0])[0]}
            />

            <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
              <button
                type="submit"
                className="btn btn-outline btn-primary btn-wide"
                onClick={formHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default HouseForm
