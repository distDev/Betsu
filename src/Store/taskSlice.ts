import { createSlice } from "@reduxjs/toolkit";
import { handleDragColumn, handleDragTask } from "../Utils/kanban-logic";
import { nanoid } from "nanoid";
import { RootState } from "./store";

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

    addTask: (state, { payload }) => {
      state.list.push({
        id: nanoid(),
        description: "",
        name: payload.name,
        position: payload.position,
        cover: {
          color: "",
        },
        checkLists: [],
        idBoard: "1",
        idList: payload.idList,
      });
    },

    deleteTask: (state, { payload }) => {},

    dragTask: (state, { payload }) => {
      const changedTasks = handleDragTask(
        state.list,
        payload.destination,
        payload.result,
        payload.source,
        payload.end,
        payload.start
      );

      state.list = changedTasks;
    },

    addColumn: (state, { payload }) => {
      state.columns.push({
        id: nanoid(),
        cover: {
          color: "#F8BD1C",
        },
        name: payload.name,
        idBoard: "1",
      });
    },

    deleteColumn: (state, { payload }) => {
      state.columns = state.columns.filter((col) => col.id !== payload.id);
    },

    dragColumn: (state, { payload }) => {
      const changedList = handleDragColumn(
        state.columns,
        payload.result,
        payload.start,
        payload.end
      );
      state.columns = changedList;
    },
  },
});

export const {
  getTasks,
  setColumns,
  dragColumn,
  dragTask,
  addColumn,
  addTask,
} = taskSlice.actions;

export const getColumnTasks = (idColumn: number | string, state: RootState) => {
  let currentTasks = state.tasks.list.filter((task) => task.id === idColumn);
  return [...currentTasks].sort((a, b) => a.position - b.position);
};

export default taskSlice.reducer;
