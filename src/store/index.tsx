import { configureStore } from "@reduxjs/toolkit"
import houseReducer from "../redux/houseSlice"
import tenantReducer from "../redux/tenantSlice"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    houses: houseReducer,
    tenants: tenantReducer
  }
})
