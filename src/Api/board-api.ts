import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { ILabel } from "../Types/board";

interface IBoardLabels {
  id: string;
  idBoard?: string;
  labels: ILabel[];
}

export const boardApi = {
  getBoardLabels: async (id: string): Promise<IBoardLabels> => {
    let labels = {};
    const q = query(collection(db, "labels"), where("idBoard", "==", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      let data = doc.data();
      labels = { ...data, id: doc.id };
    });

    return labels as IBoardLabels;
  },
};

const newApi = {};
