import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";

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
                <Box></Box>
                <Spacer />
                <Stack direction="row" spacing="20px"></Stack>
              </Flex>
            </Box>
          </div>
        )}
      </Draggable>

      {/* Детальная информация о карточке */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={cardRef}
        size='lg'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default KanbanCard;
