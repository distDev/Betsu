import { createSlice } from "@reduxjs/toolkit";
import { handleDragColumn } from "../Utils/kanban-logic";

interface taskState {
  list: any[];
  columns: any[];
}

const initialState: taskState = {
  list: [],
  columns: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, { payload }) => {
      state.list = payload.list;
    },
    setColumns: (state, { payload }) => {
      state.columns = payload.columns;
    },
    addTask: (state, { payload }) => {},
    deleteTask: (state, { payload }) => {},
    dragTask: (state, { payload }) => {},
    addColumn: (state, { payload }) => {},
    deleteColumn: (state, { payload }) => {},

    dragColumn: (state, action) => {
      const changedList = handleDragColumn(
        state.columns,
        action.payload.result,
        action.payload.start,
        action.payload.end
      );
      state.columns = changedList;
    },
  },
});

export const { getTasks, setColumns, dragColumn } = taskSlice.actions;

export default taskSlice.reducer;
