import { Stack } from "@chakra-ui/react";
import BoardHeader from "./components/board-header/BoardHeader";
import BoardContent from "./components/board-content";
import { useSearchParams } from "react-router-dom";
import CardDetails from "../../Components/card-details";

type Props = {};

const Board = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Stack direction="column" spacing="15px">
      <BoardHeader />
      <BoardContent />
      <CardDetails isOpen={!!searchParams.size} />
    </Stack>
  );
};

export default Board;
