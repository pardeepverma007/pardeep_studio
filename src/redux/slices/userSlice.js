import { createSlice, createSelector } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUserData: (state, action) => {
      //   state.push(action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const getItemSelecter = createSelector(
  (state) => state.user,
  (state) => state
);
export const { addUserData } = userSlice.actions;
export default userSlice.reducer;
