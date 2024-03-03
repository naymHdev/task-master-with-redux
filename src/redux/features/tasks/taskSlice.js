import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
    {
      id: 2,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
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
    removeTask: (state, {payload}) => {
      state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, {payload}) => {
      const target = state.tasks.find(item => item.id === payload.id)
      target.status = payload.status
    }
  },
});

export const { addTask, removeTask, updateStatus } = taskSlice.actions;
export default taskSlice.reducer;
