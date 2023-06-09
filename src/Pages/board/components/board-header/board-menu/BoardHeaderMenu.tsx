import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  MdAddLink,
  MdDashboard,
  MdMoreHoriz,
  MdOutlineToc,
  MdSettings,
} from "react-icons/md";

type Props = {};

const BoardHeaderMenu = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        aria-label="Кнопка открытия меню доски"
        variant="solid"
        bg="white"
        icon={<MdMoreHoriz />}
        color="textSecond"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Меню</DrawerHeader>

          <DrawerBody>
            <Stack spacing="10px">
              <Button
                fontWeight="normal"
                variant="ghost"
                size="md"
                color="textMain"
                display="flex"
                justifyContent="start"
                leftIcon={<MdDashboard />}
              >
                О доске
              </Button>
              <Button
                fontWeight="normal"
                variant="ghost"
                size="md"
                color="textMain"
                display="flex"
                justifyContent="start"
                leftIcon={<MdSettings />}
              >
                Настройки
              </Button>
              <Divider />
              <Button
                fontWeight="normal"
                variant="ghost"
                size="md"
                color="textMain"
                display="flex"
                justifyContent="start"
                leftIcon={<MdAddLink />}
              >
                Поделиться
              </Button>
              <Divider />
              <Button
                fontWeight="normal"
                variant="ghost"
                size="md"
                color="textMain"
                display="flex"
                justifyContent="start"
                leftIcon={<MdOutlineToc />}
              >
                Действия
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BoardHeaderMenu;
