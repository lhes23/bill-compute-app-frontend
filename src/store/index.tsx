import { configureStore } from "@reduxjs/toolkit"
import houseReducer from "../redux/houseSlice"

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    houses: houseReducer
  }
})
