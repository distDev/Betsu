import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/task-slice";
import listReducer from "./slices/list-slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    lists: listReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
