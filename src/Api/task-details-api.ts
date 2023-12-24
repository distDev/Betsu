import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { ILabel, ITodo } from "../Types/board";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface IChangeTitle {
  id: string;
  name: string;
}


export const taskDetailsApi = {
  // обновление имени вложения
  updateAttachName: async ({ id, name }: { id: string; name: string }) => {
    const attachRef = doc(db, "attachments", id);

    await updateDoc(attachRef, {
      fileName: name,
    });
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

  // добавление задачи в checklist
  addTodo: async (id: string, todo: ITodo) => {
    const checklistRef = doc(db, "checklists", id);

    await updateDoc(checklistRef, {
      items: arrayUnion(todo),
    });
  },

  // удаление задачи из checklist
  deleteTodo: async (id: string, todo: ITodo) => {
    const checklistRef = doc(db, "checklists", id);

    await updateDoc(checklistRef, {
      items: arrayRemove(todo),
    });
  },

  changeTodo: async () => {},

  checkTodoToggle: async (id: string, todo: ITodo, newTodo: ITodo) => {
    const checklistRef = doc(db, "checklists", id);
    try {
      await updateDoc(checklistRef, {
        items: arrayRemove(todo),
      });

      await updateDoc(checklistRef, {
        items: arrayUnion(newTodo),
      });

      console.log("Объект успешно обновлен");
    } catch (error) {
      console.error("Ошибка при обновлении объекта", error);
    }
  },

  removeCheckedTodo: async () => {},

  addTodoList: async () => {},

  deleteTodoList: async () => {},

  testTodo: () => {
    return {}
  }
};
