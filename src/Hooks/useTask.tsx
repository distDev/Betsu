import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";

const useTask = (idTask: string, idBoard: string) => {
  const [task, setTask] = useState<any>({});
  const [labels, setLabels] = useState<any>([]);
  const [checkLists, setCheckLists] = useState<any>([]);
  const [dueDate, setDueDate] = useState<any>();
  const [comments, setComments] = useState<any>();
  const [attachments, setAttachments] = useState<any>();

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

    // получение меток
    const unsubscribeLabels = onSnapshot(labelsRef, (doc) => {
      setLabels(doc.data());
    });

    // получение чек-листов

    return () => {
      unsubscribeTask();
      unsubscribeLabels();
    };
  }, []);

  return {
    name: task.name,
    desc: task.desc,
    // labels: task.labels,
  };
};

export default useTask;
