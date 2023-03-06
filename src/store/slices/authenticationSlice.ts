import { createSlice } from "@reduxjs/toolkit";


// Redux Toolkit's createSlice and createReducer APIs use Immer inside to
// allow us to write "mutating" update logic that becomes correct immutable updates.
export const initialState = {
  access_token: null,
  user_id: null,
  userName: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
  }
});

export const {
} = authenticationSlice.actions;

// Action creators are generated for each case reducer function
export const authenticationSeletor = (state: any) => state.authentication;

export default authenticationSlice.reducer;
