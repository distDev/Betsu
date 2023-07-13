import { FC } from "react";
import BoardsItem from "../boards-item";

type Props = {
  data: {
    idBoard: string;
    name: string;
    cover: string;
  }[];
 
};

const BoardsItems: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map(({ idBoard, name, cover }) => (
        <BoardsItem idBoard={idBoard} name={name} cover={cover} key={idBoard} />
      ))}
    </>
  );
};

export default BoardsItems;
