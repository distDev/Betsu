import { Stack } from "@chakra-ui/react";
import React from "react";
import KanbanColumn from "./kanban-column";

type Props = {};

const Kanban = (props: Props) => {
  return (
    <Stack direction="row" spacing="30px">
      <KanbanColumn />
      <KanbanColumn />
    </Stack>
  );
};

export default Kanban;
