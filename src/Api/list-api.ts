import {
  addDoc,
  collection,
} from "firebase/firestore";
import { IList } from "../Types/board";
import { db } from "../../firebase.config";

export const listApi = {
  createNewList: async (data: IList) => {
    const listRef = collection(db, "lists");
    
    await addDoc(listRef, data);
  },

  deleteList: async () => {},

  copyList: async () => {},
};
