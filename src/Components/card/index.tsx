import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Icon,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import CardDetails from "../card-details";
import { MdAttachFile } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { ITask } from "../../Types/board";

type Props = {
  index: number;
};

const KanbanCard: FC<Props & ITask> = ({
  id,
  index,
  name,
  checkItemsCheckedCount,
  checkItemsCount,
  closed,
  commentsCount,
  desc,
  due,
  dueComplete,
  fileCount,
  idMembers,
  labels,
  position,
  start,
  subscribed,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardRef = useRef(null);

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Box
              bg="white"
              p="15px"
              m="5px 0px"
              borderRadius="8px"
              ref={cardRef}
              onClick={onOpen}
              cursor="pointer"
            >
              {labels.length > 0 && (
                <Box display="flex" flexDirection="row" gap="10px" mb="10px">
                  {labels.map((label) => (
                    <Box
                      bg={label.color}
                      key={label.id}
                      w="60px"
                      h="8px"
                      borderRadius="4px"
                    />
                  ))}
                </Box>
              )}
              <Box mb="25px">
                <Text fontSize="16px" fontWeight="normal">
                  {name}
                </Text>
                {desc && (
                  <Text
                    fontSize="13px"
                    fontWeight="normal"
                    color="textSecond"
                    mt="7px"
                  >
                    {desc}
                  </Text>
                )}
              </Box>
              <Flex>
                <AvatarGroup size="sm" max={2}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                </AvatarGroup>
                <Spacer />
                <Stack direction="row" spacing="20px" alignItems="end">
                  {fileCount && (
                    <Text color="textSecond">
                      24 <Icon as={MdAttachFile} fontSize="18px" />
                    </Text>
                  )}

                  {commentsCount && (
                    <Text color="textSecond">
                      {commentsCount}
                      <Icon as={BiMessageSquareDots} fontSize="18px" />
                    </Text>
                  )}
                </Stack>
              </Flex>
            </Box>
          </div>
        )}
      </Draggable>

      {/* Детальная информация о карточке */}

      <CardDetails isOpen={isOpen} onClose={onClose} finalFocusRef={cardRef} />
    </>
  );
};

export default KanbanCard;
