import { Box, IconButton, Spacer, Stack, Text } from "@chakra-ui/react";
import KanbanCard from "../kanban-card";
import { MdMoreHoriz } from "react-icons/md";

type Props = {};

const KanbanColumn = (props: Props) => {
  return (
    <Box w="360px">
      <Box
        p="5px 8px"
        mb="10px"
        display="flex"
        alignItems="center"
        bg="white"
        borderRadius="8px"
      >
        <Text ml='12px'>Не сделано</Text>
        <Spacer />
        <IconButton
          aria-label="Дополнительная информация"
          variant="solid"
          bg="white"
          icon={<MdMoreHoriz />}
          color="textSecond"
        ></IconButton>
      </Box>
      <Stack spacing='10px' >
        <KanbanCard />
        <KanbanCard />
      </Stack>
    </Box>
  );
};

export default KanbanColumn;
