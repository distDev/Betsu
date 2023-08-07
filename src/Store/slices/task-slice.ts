import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleDrag } from "../../Helpers/kanban-logic";
import { nanoid } from "nanoid";
import { IDragItem, ITask } from "../../Types/board";
import { taskApi } from "../../Api/task-api";

interface taskState {
  list: ITask[];
}

const initialState: taskState = {
  list: [],
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

export const changePositionTask = createAsyncThunk(
  "tasks/changePositionTask",
  async (
    { destination, end, result, source, start }: IDragItem,
    { getState, dispatch }
  ) => {
    const state = getState() as { tasks: { list: ITask } };

    const changedTasks = handleDrag({
      data: state.tasks.list,
      isTask: true,
      destination,
      end,
      result,
      source,
      start,
    });

    if (changedTasks === null) {
      return;
    }

    const { position, changedPosition } = changedTasks;

    try {
      dispatch(setTasks({ list: changedPosition }));

      await taskApi.changePositionTask({
        id: result.draggableId,
        idList: destination!.droppableId,
        position,
      });
    } catch (error) {}
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string, thunkApi) => {
    await taskApi.deleteTask(id);
  }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.list = payload.list;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewTask.fulfilled, (state, action) => {});
    builder.addCase(changePositionTask.fulfilled, (state, action) => {});
    builder.addCase(deleteTask.fulfilled, (state, action) => {});
  },
});

export const { setTasks } = taskSlice.actions;

export default taskSlice.reducer;
