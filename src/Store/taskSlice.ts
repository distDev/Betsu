import { createSlice } from "@reduxjs/toolkit";
import { handleDragColumn, handleDragTask } from "../Utils/kanban-logic";
import { nanoid } from "nanoid";
import { RootState } from "./store";
import { IList, ITask } from "../Types/board";

interface taskState {
  list: ITask[];
  columns: IList[];
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
        closed: false,
        desc: "",
        due: null,
        dueComplete: false,
        dueReminder: null,
        idList: payload.idList,
        idBoard: payload.idBoard,
        idMembers: [],
        name: payload.name,
        position: payload.position,
        subscribed: false,
        start: null,
        commentsCount: null,
        fileCount: null,
        checkItemsCount: null,
        checkItemsCheckedCount: null,
        labels: [],
      });
    },

    deleteTask: (state, { payload }) => {
      state.list = state.list.filter((item) => item.id !== payload.id);
    },

    dragTask: (state, { payload }) => {
      const changedTasks = handleDragTask(
        state.list,
        payload.destination,
        payload.result,
        payload.source,
        payload.end,
        payload.start
      );

      if (changedTasks === null) {
        return;
      }

      const { changedPosition, position } = changedTasks;

      state.list = changedPosition;
    },

    addColumn: (state, { payload }) => {
      state.columns.push({
        id: nanoid(),
        name: payload.name,
        idBoard: payload.idBoard,
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

export default taskSlice.reducer;
