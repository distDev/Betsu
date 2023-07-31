import Kanban from "../../../../Components/kanban";
import useKanban from "../../../../Hooks/useKanban";

type Props = {};

const BoardContent = (props: Props) => {
  // Получение задач и списков
  useKanban();

  return (
    <>
      <Kanban />
    </>
  );
};

export default BoardContent;
