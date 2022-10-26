import React, { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { IHouseReading, Reading } from "../../../interfaces"
import { setHousesReadings, setPesoPer } from "../../../redux/houseSlice"
import { RootState } from "../../../store"
import HouseComponent from "./components/HouseComponent"
import TotalReading from "./components/TotalReading"

const HouseForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.houses)

  // const [totalReading, setTotalReading] = useState<Reading>({
  //   name: "main",
  //   tenant: "main",
  //   previous: 0,
  //   present: 0,
  //   consumption: 0,
  //   bill: 0,
  //   dueDate: new Date(),
  //   startDate: new Date(),
  //   endDate: new Date()
  // })

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

    dispatch(setPesoPer(pesoper))
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
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Add a Reading
        </h2>

        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          {/* <form onSubmit={formHandler}> */}
          <TotalReading />

          <HouseComponent house={houseA} setHouse={setHouseA} />
          <HouseComponent house={houseB} setHouse={setHouseB} />
          <HouseComponent house={houseC} setHouse={setHouseC} />
          <HouseComponent house={houseD} setHouse={setHouseD} />

          <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={formHandler}
            >
              <span className={styles.submitSpan}>Submit</span>
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  )
}

const styles = {
  submitBtn:
    "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
  submitSpan:
    "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-medium"
}

export default HouseForm
