import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "House A",
  tenant: "",
  previous: 0,
  present: 0,
  consumption: 0,
  bill: 0
}

export const houseASlice = createSlice({
  name: "houseA",
  initialState,
  reducers: {
    setTenant: (state, action) => (state.tenant = action.payload.tenant)
  }
})
