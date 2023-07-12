import { Stack } from "@chakra-ui/react";
import BoardHeader from "./components/board-header/BoardHeader";
import BoardContent from "./components/board-content";
import { useLocation, useParams } from "react-router-dom";

type Props = {};

const Board = (props: Props) => {
  return (
    <Stack direction="column" spacing="15px">
      <BoardHeader />
      <BoardContent />
    </Stack>
  );
};

export default Board;
