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
  pesoPer: number
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
  pesoPer: 0
}

export const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setHousesReadings: (state, action) => {
      state.houses = action.payload
    },
    setPesoPer: (state, action) => {
      state.pesoPer = action.payload
    }
  }
})

export const { setHousesReadings, setPesoPer } = houseSlice.actions

export default houseSlice.reducer
