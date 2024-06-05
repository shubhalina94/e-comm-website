import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails : (state,action)=>{
        state.user = action.payload //so that the user details are visible in the frontend side
        console.log("User details:",action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions

export default userSlice.reducer