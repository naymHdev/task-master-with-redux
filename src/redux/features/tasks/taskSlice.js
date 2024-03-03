import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, state: "Pending", ...payload });
      } else {
        const lastEl = state.tasks.at(-1);
        state.tasks.push({ id: lastEl.id + 1, state: "Pending", ...payload });
      }
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
