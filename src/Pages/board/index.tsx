import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import BoardHeader from "./components/board-header/BoardHeader";
import BoardContent from "./components/board-content";

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
