import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { IList } from "../Types/board";
import { db } from "../../firebase.config";

interface IChangePositionList {
  id: string;
  position: number;
}

export const listApi = {
  createNewList: async (data: IList) => {
    const listRef = collection(db, "lists");

    await addDoc(listRef, data);
  },

  changePositionList: async ({
    id,
    position,
  }: IChangePositionList) => {
    const listRef = doc(db, "lists", id);

    await updateDoc(listRef, {
      position,
    });
  },

  deleteList: async () => {},

  copyList: async () => {},
};
