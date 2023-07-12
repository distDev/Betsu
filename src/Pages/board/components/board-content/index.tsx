import { useParams } from "react-router-dom";
import Kanban from "../kanban";

type Props = {};

const BoardContent = (props: Props) => {
  const { id } = useParams();
  
  return (
    <>
      <Kanban />
    </>
  );
};

export default BoardContent;
