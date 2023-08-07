import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleDrag } from "../../Helpers/kanban-logic";
import { nanoid } from "nanoid";
import { IDragItem, IList } from "../../Types/board";
import { listApi } from "../../Api/list-api";

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

export const changePositionList = createAsyncThunk(
  "tasks/changePositionList",
  async (
    { destination, end, result, source, start }: IDragItem,
    { getState, dispatch }
  ) => {
    const state = getState() as { lists: { data: IList } };

    const changedLists = handleDrag({
      data: state.lists.data,
      destination,
      end,
      result,
      source,
      start,
    });

    if (changedLists === null) {
      return;
    }

    const { position, changedPosition } = changedLists;

    try {
      dispatch(setLists({ lists: changedPosition }));

      await listApi.changePositionList({
        id: result.draggableId,
        position,
      });
    } catch (error) {}
  }
);

export const taskSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setLists: (state, { payload }) => {
      state.data = payload.lists;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewList.fulfilled, (state, action) => {});
  },
});

export const { setLists } = taskSlice.actions;

export default taskSlice.reducer;
