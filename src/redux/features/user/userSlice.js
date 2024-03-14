import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Mr Eren',
    email: 'eren@gmail.com',
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
