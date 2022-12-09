import React from "react"
import { setHouseBDataReadings } from "redux/houseSlice"
import { useAppDispatch, useAppSelector } from "store"
import HouseComponent from "./HouseComponent"

const HouseBComponentForm = ({ tenantName }: { tenantName: string }) => {
  const dispatch = useAppDispatch()
  const { houseBData } = useAppSelector((state) => state.houses)

  const previousChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseBDataReadings({
        ...houseBData,
        previous: Number(e.target.value)
      })
    )
  const presentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setHouseBDataReadings({
        ...houseBData,
        present: Number(e.target.value),
        tenant: tenantName
      })
    )

  return (
    <>
      <HouseComponent
        house={houseBData}
        tenantName={tenantName}
        previousChangeHandler={previousChangeHandler}
        presentChangeHandler={presentChangeHandler}
      />
    </>
  )
}

export default HouseBComponentForm
