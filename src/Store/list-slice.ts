import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleDrag } from "../Helpers/kanban-logic";
import { nanoid } from "nanoid";
import { IList } from "../Types/board";
import { listApi } from "../Api/list-api";

interface taskState {
  data: IList[];
}

const initialState: taskState = {
  data: [],
};

export const createNewList = createAsyncThunk(
  "lists/createNewTask",
  async (
    {
      idBoard,
      position,
      name,
    }: { idBoard: string; position: number; name: string },
    thunkApi
  ) => {
    listApi.createNewList({
      subscribed: false,
      idBoard,
      position,
      name,
      id: nanoid(),
    });
  }
);

export const taskSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setLists: (state, { payload }) => {
      state.data = payload.lists;
    },

    addList: (state, { payload }) => {
      state.data.push({
        id: nanoid(),
        name: payload.name,
        idBoard: payload.idBoard,
      });
    },

    dragList: (state, { payload }) => {
      const data = state.data;

      const changedTasks = handleDrag({
        data,
        destination: payload.destination,
        end: payload.end,
        result: payload.result,
        source: payload.source,
        start: payload.start,
      });

      if (changedTasks === null) {
        return;
      }

      const { changedPosition, position } = changedTasks;

      state.data = changedPosition;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewList.fulfilled, (state, action) => {});
  },
});

export const { setLists, dragList } = taskSlice.actions;

export default taskSlice.reducer;
