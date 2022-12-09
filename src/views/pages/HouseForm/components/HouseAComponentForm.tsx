import React from "react"
import { setHouseADataReadings } from "redux/houseSlice"
import { useAppDispatch, useAppSelector } from "store"
import HouseComponent from "./HouseComponent"

const HouseAComponentForm = ({ tenantName }: { tenantName: string }) => {
  const dispatch = useAppDispatch()
  const { houseAData } = useAppSelector((state) => state.houses)

  const previousChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseADataReadings({
        ...houseAData,
        previous: Number(e.target.value)
      })
    )
  const presentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseADataReadings({
        ...houseAData,
        present: Number(e.target.value),
        tenant: tenantName
      })
    )

  return (
    <>
      <HouseComponent
        house={houseAData}
        tenantName={tenantName}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseAComponentForm
