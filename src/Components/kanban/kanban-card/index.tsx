import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  description?: string;
  id: string;
  index: number;
  name: string;
};

const KanbanCard: FC<Props> = ({ description, id, index, name }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box bg="white" p="20px" borderRadius="8px">
            <Stack direction="row" spacing="8px" mb="10px">
              <Box bg="#F8BD1C" w="60px" h="8px" borderRadius="4px" />
              <Box bg="#891BE8" w="60px" h="8px" borderRadius="4px" />
            </Stack>
            <Box mb="25px">
              <Text fontSize="16px" fontWeight="normal">
                {name}
              </Text>
              {description && (
                <Text
                  fontSize="13px"
                  fontWeight="normal"
                  color="textSecond"
                  mt="7px"
                >
                  Нужно сделать деплой сайта на vps и понять как работает nginx
                </Text>
              )}
            </Box>
            <Flex>
              <Box></Box>
              <Spacer />
              <Stack direction="row" spacing="20px"></Stack>
            </Flex>
          </Box>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanCard;
