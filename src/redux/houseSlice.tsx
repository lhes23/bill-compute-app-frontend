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
  totalReadings: {
    name: string
    billType: string
    previous: number
    present: number
    consumption: number
    bill: number
    dueDate: string
    startDate: string
    endDate: string
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
  pesoPer: 0,
  totalReadings: {
    name: "main",
    billType: "Electric",
    previous: 0,
    present: 0,
    consumption: 0,
    bill: 0,
    dueDate: "",
    startDate: "",
    endDate: ""
  }
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
    },
    setTotalReadings: (state, action) => {
      state.totalReadings = action.payload
    }
  }
})

export const { setHousesReadings, setPesoPer, setTotalReadings } =
  houseSlice.actions

export default houseSlice.reducer
