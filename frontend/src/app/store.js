import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import assetReducer from "../features/asset/assetSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    asset: assetReducer,
  },
})
