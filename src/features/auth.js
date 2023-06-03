import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../utils/api"

const initialState = {
  token: localStorage.getItem("token") ?? null,
  email: "",
  authenticationStatus: "",
  errorMsg: "",
  isLoading: false,
}

// Login User
export const login = createAsyncThunk(
  "login",
  async ({ email, password, rememberMe }, thunkAPI) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_USER_LOGIN_ENDPOINT,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )

      if (rememberMe) {
        localStorage.setItem("token", response.data.body.token)
      }

      const token = response?.data?.body?.token

      // return response?.data?.body?.token
      return { token, email }
    } catch (err) {
      if (!err?.response) {
        return thunkAPI.rejectWithValue("No Server Response")
      }

      console.log(err.response.data)
      console.log(err.response.data.message)
      console.log(err.response.status)
      return thunkAPI.rejectWithValue(err.response.data.message)
    }
  }
)

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrorMsg: (state, action) => {
      state.errorMsg = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token
        state.authenticationStatus = "success"
        state.isLoading = false
        state.email = action.payload.email
      })
      .addCase(login.pending, (state, action) => {
        state.authenticationStatus = "pending"
        state.isLoading = true
        state.errorMsg = ""
      })
      .addCase(login.rejected, (state, action) => {
        state.authenticationStatus = "rejected"
        state.isLoading = false
        // state.errorMsg = action.payload.message
        state.errorMsg = action.payload
      })
  },
})

export const { clearErrorMsg } = actions
export default reducer

//selector used with the hook useSelector
export const userSelector = (state) => state.user
