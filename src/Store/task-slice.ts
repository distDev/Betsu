import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleDragColumn, handleDragTask } from "../Helpers/kanban-logic";
import { nanoid } from "nanoid";
import { IList, ITask } from "../Types/board";
import { taskApi } from "../Api/task-api";

interface taskState {
  list: ITask[];
  columns: IList[];
}

const initialState: taskState = {
  list: [],
  columns: [],
};

export const createNewTask = createAsyncThunk(
  "tasks/createNewTask",
  async (
    {
      idList,
      idBoard,
      name,
      position,
    }: { idList: string; idBoard: string; name: string; position: number },
    thunkApi
  ) => {
    await taskApi.createNewTask({
      id: nanoid(),
      closed: false,
      desc: null,
      due: null,
      dueComplete: false,
      dueReminder: null,
      idList,
      idBoard,
      idMembers: [],
      name: name,
      position,
      subscribed: false,
      start: null,
      commentsCount: null,
      fileCount: null,
      checkItemsCount: null,
      checkItemsCheckedCount: null,
      labels: [],
    });
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(createNewTask.fulfilled, (state, action) => {});
  },
});

export const { getTasks, setColumns, dragColumn, dragTask, addColumn } =
  taskSlice.actions;

export default taskSlice.reducer;
