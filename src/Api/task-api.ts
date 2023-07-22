import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { ITask } from "../Types/board";

export const taskApi = {
  createNewTask: async (task: ITask) => {
    const cityRef = collection(db, "tasks");

    await addDoc(cityRef, task);
  },

  changePositionTask: async (id: string, position: number, idList: string) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      position,
      idList,
    });
  },

  deleteTask: async () => {},

  updateTaskTitle: async () => {},

  updateTaskDesc: async () => {},

  moveTask: async () => {},

  copyTask: async () => {},
};
