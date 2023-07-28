import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { ITask } from "../Types/board";

interface IChangePositionTask {
  id: string;
  position: number;
  idList: string;
}

export const taskApi = {
  createNewTask: async (task: ITask) => {
    const taskRef = collection(db, "tasks");

    await addDoc(taskRef, task);
  },

  changePositionTask: async ({ id, position, idList }: IChangePositionTask) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      position,
      idList,
    });
  },

  deleteTask: async (id: string) => {
    const taskRef = doc(db, "tasks", id);

    await deleteDoc(taskRef);
  },

  updateTaskTitle: async () => {},

  updateTaskDesc: async () => {},

  moveTask: async () => {},

  copyTask: async () => {},
};
