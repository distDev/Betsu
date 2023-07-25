import { useParams } from "react-router-dom";
import Kanban from "../../../../Components/kanban";
import { useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../../firebase.config";
import { useAppDispatch } from "../../../../Hooks/useAppDispatch";
import { setTasks } from "../../../../Store/task-slice";
import { setLists } from "../../../../Store/list-slice";

type Props = {};

const BoardContent = (props: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const qT = query(collection(db, "tasks"), where("idBoard", "==", id));
    const qL = query(collection(db, "lists"), where("idBoard", "==", id));

    // подписка на задачи
    const unsubscribeTasks = onSnapshot(qT, (querySnapshot) => {
      let tasks: any = [];

      querySnapshot.forEach((doc) => {
        let data = doc.data();
        tasks.push({ ...data, id: doc.id });
      });

      dispatch(setTasks({ list: tasks }));
    });

    // подписка на списки
    const unsubscribeLists = onSnapshot(qL, (querySnapshot) => {
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

  return (
    <>
      <Kanban />
    </>
  );
};

export default BoardContent;
