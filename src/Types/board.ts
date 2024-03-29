import { DraggableLocation, DropResult } from "react-beautiful-dnd";

export interface IBoard {
  idBoard: string;
  idUser?: string;
  name: string;
  cover: string | null;
  dateLastView?: string;
  memberships?:
    | {
        idMember: string;
      }[]
    | [];
}

export interface ITask {
  id: string;
  closed: boolean;
  desc: string | null;
  due: string | null;
  dueComplete: boolean | null;
  dueReminder?: number | null;
  idList?: string;
  idBoard?: string;
  idMembers: string[] | [];
  name: string;
  position?: number;
  subscribed?: boolean;
  start: string | null;
  commentsCount: number | null;
  fileCount: number | null;
  checkItemsCount: number | null;
  checkItemsCheckedCount: number | null;
  labels:
    | {
        id: string;
        idBoard: string;
        name: string;
        color: string;
      }[]
    | [];
}

export interface IList {
  id: string;
  name: string;
  subscribed?: boolean;
  position?: number;
  idBoard?: string;
}

export interface IDragItem {
  data?: any;
  destination: DraggableLocation | null | undefined;
  result: DropResult;
  source: DraggableLocation;
  end: number;
  start: number;
  isTask?: boolean;
}

export interface ILabel {
  id: string;
  name: string;
  color: string;
}

export interface IAttach {
  fileName: string;
  type: string;
  isUpload: boolean;
  edgeColor: string;
  url: string;
  idMember: string;
  position: number;
  idTask: string;
  id: string;
}

export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
  due: null;
  dueReminder: null;
  idMember: null;
}
export interface IChecklist {
  id: string;
  idTask: string;
  name: string;
  items: ITodo[] | [];
}
