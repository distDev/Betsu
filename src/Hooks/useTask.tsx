import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";

const useTask = (id: string) => {
  const [task, setTask] = useState<any>();
  const [labels, setLabels] = useState<any>();
  const [labels, setLabels] = useState<any>();
  const [labels, setLabels] = useState<any>();
  
  useEffect(() => {
    const taskRef = doc(db, "tasks", id);

    const unsub = onSnapshot(taskRef, (doc) => {
      setTask(doc.data());
    });

    return () => {
      unsub();
    };
  }, []);

  return {
    name: task.name,
    desc: task.desc,
    labels: task.labels,
  };
};

export default useTask;
