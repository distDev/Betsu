import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task-slice";
import listReducer from "./list-slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    lists: listReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
