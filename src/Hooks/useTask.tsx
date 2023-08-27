import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import { IChecklist } from "../Types/board";

const useTask = (idTask: string, idBoard: string) => {
  const [task, setTask] = useState<any>({});
  const [checkLists, setCheckLists] = useState<IChecklist[] | []>([]);
  const [dueDate, setDueDate] = useState<any>();
  const [comments, setComments] = useState<any>();
  const [attachments, setAttachments] = useState<any>([]);

  useEffect(() => {
    const taskRef = doc(db, "tasks", idTask);
    const labelsRef = doc(db, "labels", idTask);
    const qComments = query(
      collection(db, "comments"),
      where("idTask", "==", idTask)
    );
    const qCheckList = query(
      collection(db, "checklists"),
      where("idTask", "==", idTask)
    );
    const qDueDate = query(
      collection(db, "duedate"),
      where("idTask", "==", idTask)
    );
    const qAttachments = query(
      collection(db, "attachments"),
      where("idTask", "==", idTask)
    );

    // получение задачи
    const unsubscribeTask = onSnapshot(taskRef, (doc) => {
      setTask(doc.data());
    });

    // получение вложений
    const unsubscribeAttach = onSnapshot(qAttachments, (querySnapshot) => {
      let lists: any = [];

      querySnapshot.forEach((doc) => {
        let data = doc.data();
        lists.push({ ...data, id: doc.id });
      });

      setAttachments([...lists]);
    });

    // получение чек-листов
    const unsubscribeChecklists = onSnapshot(qCheckList, (querySnapshot) => {
      let lists: any = [];

      querySnapshot.forEach((doc) => {
        let data = doc.data();

        lists.push({ ...data, id: doc.id });
      });

      setCheckLists([...lists]);
    });

    return () => {
      unsubscribeTask();
      unsubscribeAttach();
      unsubscribeChecklists();
    };
  }, []);

  return {
    name: task.name,
    desc: task.desc,
    labels: task.labels,
    idList: task.idList,
    attachments: attachments,
    checkLists: checkLists,
  };
};

export default useTask;
