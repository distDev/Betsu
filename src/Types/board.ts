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
  idBoard: string;
  subscribed?: boolean;
}
