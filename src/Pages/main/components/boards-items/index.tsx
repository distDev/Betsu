import { FC } from "react";
import BoardsItem from "../boards-item";

type Props = {
  data: {
    id: string;
    name: string;
  }[];
};

const BoardsItems: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map(({ id, name }) => (
        <BoardsItem id={id} name={name} />
      ))}
    </>
  );
};

export default BoardsItems;
