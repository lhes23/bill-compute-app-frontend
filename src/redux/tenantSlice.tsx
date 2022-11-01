import { createSlice } from "@reduxjs/toolkit"

export interface IInitialState {
  tenants: {
    id: string
    name: string
    house_id: number
    fb_messenger: string
    is_active: boolean
    date_started: string
  }[]
}

const initialState: IInitialState = {
  tenants: [
    {
      id: "",
      name: "",
      house_id: 0,
      fb_messenger: "",
      is_active: true,
      date_started: ""
    }
  ]
}

export const tenantSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    setAllTenants: (state, action) => {
      state.tenants = action.payload
    }
  }
})

export const { setAllTenants } = tenantSlice.actions

export default tenantSlice.reducer
