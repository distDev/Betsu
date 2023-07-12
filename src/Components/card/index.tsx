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

type Props = {
  description?: string;
  id: string;
  index: number;
  name: string;
};

const KanbanCard: FC<Props> = ({ description, id, index, name }) => {
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
              p="20px"
              m="5px 0px"
              borderRadius="8px"
              ref={cardRef}
              onClick={onOpen}
              cursor="pointer"
            >
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
                    Нужно сделать деплой сайта на vps и понять как работает
                    nginx
                  </Text>
                )}
              </Box>
              <Flex>
                <AvatarGroup size="sm" max={2}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
                <Spacer />
                <Stack direction="row" spacing="20px" alignItems="end">
                  <Text color="textSecond">
                    24 <Icon as={MdAttachFile} fontSize="18px" />
                  </Text>
                  <Text color="textSecond">
                    12 <Icon as={BiMessageSquareDots} fontSize="18px" />
                  </Text>
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
