import React, { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { IHouseReading } from "interfaces"
import {
  setHousesReadings,
  setPesoPer,
  setTotalReadings
} from "redux/houseSlice"
import { RootState } from "store"
import HouseComponent from "./components/HouseComponent"
import TotalReading from "./components/TotalReading"

const HouseForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.houses)

  const [dueDateLocal, setDueDateLocal] = useState<Date>(new Date())
  const [startDateLocal, setStartDateLocal] = useState<Date>(new Date())
  const [endDateLocal, setEndDateLocal] = useState<Date>(new Date())

  const [houseA, setHouseA] = useState<IHouseReading>({
    name: "House A",
    tenant: "",
    previous: 0,
    present: 0
  })
  const [houseB, setHouseB] = useState<IHouseReading>({
    name: "House B",
    tenant: "",
    previous: 0,
    present: 0
  })
  const [houseC, setHouseC] = useState<IHouseReading>({
    name: "House C",
    tenant: "",
    previous: 0,
    present: 0
  })
  const [houseD, setHouseD] = useState<IHouseReading>({
    name: "House D",
    tenant: "",
    previous: 0,
    present: 0
  })

  const totalConsumption =
    store.totalReadings.present - store.totalReadings.previous
  const pesoper = Math.round(store.totalReadings.bill / totalConsumption)

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

    // Save Dates on Redux
    dispatch(
      setTotalReadings({
        ...store.totalReadings,
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
          tenant: houseA?.tenant || "",
          previous: houseA.previous,
          present: houseA.present,
          consumption: houseAConsumption,
          bill: houseABill
        },
        {
          name: houseB.name,
          tenant: houseB?.tenant || "",
          previous: houseB.previous,
          present: houseB.present,
          consumption: houseBConsumption,
          bill: houseBBill
        },
        {
          name: houseC.name,
          tenant: houseC?.tenant || "",
          previous: houseC.previous,
          present: houseC.present,
          consumption: houseCConsumption,
          bill: houseCBill
        },
        {
          name: houseD.name,
          tenant: houseD?.tenant || "",
          previous: houseD.previous,
          present: houseD.present,
          consumption: houseDConsumption,
          bill: houseDBill
        }
      ])
    )

    navigate("/result")
  }

  return (
    <>
      <div>
        <h2 className="my-6 text-2xl font-semibold">Add a Reading</h2>
        <div className="flex justify-center">
          <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md md:w-[50vw]">
            {/* <form onSubmit={formHandler}> */}
            <TotalReading
              dueDateLocal={dueDateLocal}
              setDueDateLocal={setDueDateLocal}
              startDateLocal={startDateLocal}
              setStartDateLocal={setStartDateLocal}
              endDateLocal={endDateLocal}
              setEndDateLocal={setEndDateLocal}
            />

            <HouseComponent house={houseA} setHouse={setHouseA} />
            <HouseComponent house={houseB} setHouse={setHouseB} />
            <HouseComponent house={houseC} setHouse={setHouseC} />
            <HouseComponent house={houseD} setHouse={setHouseD} />

            <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
              <button
                type="submit"
                className="btn btn-outline btn-primary btn-wide"
                onClick={formHandler}
              >
                Submit
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HouseForm
