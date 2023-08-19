import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { ILabel, ITask } from "../Types/board";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface IChangePositionTask {
  id: string;
  position: number;
  idList: string;
}

interface IChangeTitle {
  id: string;
  name: string;
}

export const taskApi = {
  // добавление задачи
  createNewTask: async (task: ITask) => {
    const taskRef = collection(db, "tasks");

    await addDoc(taskRef, task);
  },

  // изменение позиции при drag and drop
  changePositionTask: async ({ id, position, idList }: IChangePositionTask) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      position,
      idList,
    });
  },

  // удаление задачи
  deleteTask: async (id: string) => {
    const taskRef = doc(db, "tasks", id);

    await deleteDoc(taskRef);
  },

  // изменение заголовка
  updateTaskTitle: async ({ id, name }: IChangeTitle) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      name,
    });
  },

  // изменение описания
  updateTaskDesc: async ({ id, desc }: { id: string; desc: string }) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      desc,
    });
  },

  // добавление метки
  addLabel: async (id: string, data: ILabel) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      labels: arrayUnion(data),
    });
  },

  // удаление метки
  deleteLabel: async (id: string, data: ILabel) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      labels: arrayRemove(data),
    });
  },

  // создание вложения (файлы, фотографии)
  addAttachments: async ({
    file,
    id,
    name,
  }: {
    file: File;
    id: string;
    name?: string;
  }) => {
    const fileStorageRef = ref(storage, `files/${file.name}`);
    const attachmentRef = collection(db, "attachments");

    // загрузка файла в storage
    await uploadBytes(fileStorageRef, file);

    const uploadFileUrl = await getDownloadURL(fileStorageRef);

    // добавление документа в firestore
    await addDoc(attachmentRef, {
      idTask: id,
      idMember: "61eb0532dcb7521a5b3bef19",
      edgeColor: "#3c3c3c",
      url: uploadFileUrl,
      position: 16384,
      isUpload: true,
      fileName: name ? name : file.name,
      type: file.type,
    });
  },

  // удаление вложения
  deleteAttachments: async (id: string) => {
    const attachmentRef = doc(db, "attachments", id);

    await deleteDoc(attachmentRef);
  },

  // перемещение задачи в другой список
  moveTask: async () => {},

  // копирование задачи в другой список
  copyTask: async () => {},
};
