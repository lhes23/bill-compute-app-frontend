import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
  houses: {
    name: string
    tenant: string
    previous: number
    present: number
    consumption: number
    bill: number
  }[]
  houseAValue: {
    name: ""
    tenant: ""
    previous: 0
    present: 0
    consumption: 0
    bill: 0
  }
}

const initialState: IInitialState = {
  houses: [
    {
      name: "",
      tenant: "",
      previous: 0,
      present: 0,
      consumption: 0,
      bill: 0
    }
  ],
  houseAValue: {
    name: "",
    tenant: "",
    previous: 0,
    present: 0,
    consumption: 0,
    bill: 0
  }
}

export const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setHouseAReadings: (state, action) => {
      console.log({ action })
      return (state.houseAValue = action.payload)
    }
  }
})

export const { setHouseAReadings } = houseSlice.actions

export default houseSlice.reducer
