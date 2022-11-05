import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import client from "axiosClient/client"
import { IInitialState } from "interfaces"

export const getAllHouses = createAsyncThunk(
  "appHouses/getAllHouses",
  async () => {
    try {
      const allHouses = await client.get("houses")
      const { data } = await allHouses
      return { allHouses: data }
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState: IInitialState = {
  houses: [
    {
      house_id: 0,
      tenant_id: 0,
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
    name: "wholeHouse",
    billType: "Electric",
    previous: 0,
    present: 0,
    consumption: 0,
    bill: 0,
    dueDate: "",
    startDate: "",
    endDate: ""
  },
  allHouses: [
    {
      id: 0,
      name: "",
      is_occupied: false,
      color: ""
    }
  ]
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
  },
  extraReducers: (builder) => {
    builder.addCase(getAllHouses.fulfilled, (state, action) => {
      state.allHouses = action.payload?.allHouses
    })
  }
})

export const { setHousesReadings, setPesoPer, setTotalReadings } =
  houseSlice.actions

export default houseSlice.reducer
