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
  ]
}

export const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setHousesReadings: (state, action) => {
      state.houses = action.payload
    }
  }
})

export const { setHousesReadings } = houseSlice.actions

export default houseSlice.reducer
