import React, { FormEvent, useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import { IHouseReading, ITenant } from "interfaces"
import {
  getAllHouses,
  setHouseADataReadings,
  setHouseBDataReadings,
  setHouseCDataReadings,
  setHouseDDataReadings,
  setHouseMainDataReadings,
  setHousesReadings,
  setPesoPer,
  setTotalReadings
} from "redux/houseSlice"
import TotalReading from "./components/TotalReading"
import PageLayout from "layouts/PageLayout"
import { useAppDispatch, useAppSelector } from "store"
import { getActiveTenants } from "redux/tenantSlice"
import HouseAComponentForm from "./components/HouseAComponentForm"
import HouseBComponentForm from "./components/HouseBComponentForm"
import HouseCComponentForm from "./components/HouseCComponentForm"
import HouseDComponentForm from "./components/HouseDComponentForm"

const HouseForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { houses } = useAppSelector((state) => state)
  const {
    totalReadings,
    houseAData,
    houseBData,
    houseCData,
    houseDData,
    houseMainData
  } = houses

  useEffect(() => {
    dispatch(getAllHouses())
    dispatch(getActiveTenants())
  }, [dispatch])

  const [dueDateLocal, setDueDateLocal] = useState<Date>(new Date())
  const [startDateLocal, setStartDateLocal] = useState<Date>(new Date())
  const [endDateLocal, setEndDateLocal] = useState<Date>(new Date())

  const getBillsAndConsumptions = (
    present: number,
    previous: number,
    pesoper: number
  ) => {
    const consumption = present - previous
    const bill = consumption * pesoper
    return {
      consumption,
      bill
    }
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
    house_id: 0,
    tenant: "",
    tenant_id: 0,
    previous: 0,
    present: 0
  })

  const totalConsumption = totalReadings.present - totalReadings.previous
  const pesoper = Math.round(totalReadings.bill / totalConsumption)

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    const houseAConsumption = getBillsAndConsumptions(
      houseAData.present,
      houseAData.previous,
      pesoper
    )
    const houseBConsumption = getBillsAndConsumptions(
      houseBData.present,
      houseBData.previous,
      pesoper
    )
    const houseCConsumption = getBillsAndConsumptions(
      houseCData.present,
      houseCData.previous,
      pesoper
    )
    const houseDConsumption = getBillsAndConsumptions(
      houseDData.present,
      houseDData.previous,
      pesoper
    )

    const houseMainConsumption =
      totalConsumption -
      (houseAData.consumption +
        houseBData.consumption +
        houseCData.consumption +
        houseDData.consumption)
    const houseMainBill =
      totalReadings.bill -
      (houseAData.bill + houseBData.bill + houseCData.bill + houseDData.bill)

    await dispatch(
      setHouseADataReadings({
        ...houseAData,
        ...houseAConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseBDataReadings({
        ...houseBData,
        ...houseBConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseCDataReadings({
        ...houseCData,
        ...houseCConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseDDataReadings({
        ...houseDData,
        ...houseDConsumption,
        pesoper
      })
    )
    await dispatch(
      setHouseMainDataReadings({
        ...houseMainData,
        present: totalReadings.present,
        previous: totalReadings.previous,
        consumption: houseMainConsumption,
        bill: Number(houseMainBill).toFixed(2),
        pesoper
      })
    )

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
          bill: houseAData.bill
        },
        {
          name: houseB.name,
          tenant: houseB?.tenant,
          previous: houseB.previous,
          present: houseB.present,
          consumption: houseBConsumption,
          bill: houseBData.bill
        },
        {
          name: houseC.name,
          tenant: houseC?.tenant,
          previous: houseC.previous,
          present: houseC.present,
          consumption: houseCConsumption,
          bill: houseCData.bill
        },
        {
          name: houseD.name,
          tenant: houseD?.tenant,
          previous: houseD.previous,
          present: houseD.present,
          consumption: houseDConsumption,
          bill: houseDData.bill
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

            <HouseAComponentForm />
            <HouseBComponentForm />
            <HouseCComponentForm />
            <HouseDComponentForm />

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
