import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "./useAppDispatch";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase.config";
import { setTasks } from "../Store/task-slice";
import { setLists } from "../Store/list-slice";

type Props = {};

const useKanban = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const qTasks = query(collection(db, "tasks"), where("idBoard", "==", id));
    const qLists = query(collection(db, "lists"), where("idBoard", "==", id));

    // подписка на задачи
    const unsubscribeTasks = onSnapshot(qTasks, (querySnapshot) => {
      let tasks: any = [];

      querySnapshot.forEach((doc) => {
        let data = doc.data();
        tasks.push({ ...data, id: doc.id });
      });

      dispatch(setTasks({ list: tasks }));
    });

    // подписка на списки
    const unsubscribeLists = onSnapshot(qLists, (querySnapshot) => {
      let lists: any = [];

      querySnapshot.forEach((doc) => {
        let data = doc.data();
        lists.push({ ...data, id: doc.id });
      });

      dispatch(setLists({ lists }));
    });

    return () => {
      unsubscribeTasks();
      unsubscribeLists();
    };
  }, []);

  return {};
};

export default useKanban;
