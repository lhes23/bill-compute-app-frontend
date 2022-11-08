import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import client from "axiosClient/client"
import { ITenant } from "interfaces"

export interface IInitialState {
  tenants: ITenant[]
}

const initialState: IInitialState = {
  tenants: [
    {
      id: 0,
      name: "",
      house_id: 0,
      fb_messenger: "",
      is_active: true,
      date_started: ""
    }
  ]
}

export const getAllTenants = createAsyncThunk(
  "appHouses/getAllTenants",
  async () => {
    try {
      const response = await client.get("tenants")
      const { data } = await response
      return { allTenants: data }
    } catch (error) {
      console.log(error)
    }
  }
)

export const tenantSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    setAllTenants: (state, action) => {
      state.tenants = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTenants.fulfilled, (state, action) => {
      state.tenants = action.payload?.allTenants
    })
  }
})

export const { setAllTenants } = tenantSlice.actions

export default tenantSlice.reducer
