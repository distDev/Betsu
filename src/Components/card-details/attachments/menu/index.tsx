import { FC, ReactNode, useState } from "react";
import {
  Box,
  Button,
  Center,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import { taskApi } from "../../../../Api/task-api";
import { taskDetailsApi } from "../../../../Api/task-details-api";

type Props = {
  children: ReactNode;
  id: string;
  fileName: string;
};

const AttachmentsMenu: FC<Props> = ({ children, id, fileName }) => {
  const [isEditing, setisEditing] = useState(false);
  const [name, setName] = useState("");

  // удаление вложения
  const handleDelete = async () => {
    await taskApi.deleteAttachments(id);
  };

  // переключение в режим редактирования
  const handleEditing = (name: string) => {
    setisEditing(true);
    setName(name);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // изменение имени вложения
  const updateName = async () => {
    await taskDetailsApi.updateAttachName({ id, name });
    setisEditing((prev) => !prev);
  };

  return (
    <Popover>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>{children}</PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <Center>
                {isEditing ? "Изменить вложение" : "Меню вложения"}
              </Center>
            </PopoverHeader>
            <PopoverBody p="0">
              {!isEditing && (
                <Stack spacing="0">
                  <Button
                    onClick={() => handleEditing(fileName)}
                    fontWeight="normal"
                    justifyContent="start"
                    borderBottom="1px solid #e2e8f0"
                    borderRadius="0"
                    variant="ghost"
                  >
                    Изменить
                  </Button>
                  <Button
                    fontWeight="normal"
                    justifyContent="start"
                    borderBottom="1px solid #e2e8f0"
                    borderRadius="0"
                    variant="ghost"
                  >
                    Сделать обложкой
                  </Button>
                  <Button
                    onClick={handleDelete}
                    fontWeight="normal"
                    justifyContent="start"
                    borderBottom="1px solid #e2e8f0"
                    borderRadius="0"
                    variant="ghost"
                  >
                    Удалить
                  </Button>
                </Stack>
              )}

              {isEditing && (
                <>
                  <Box p="10px">
                    <Text>Название ссылки</Text>
                    <Input
                      value={name}
                      onChange={handleChangeName}
                      autoFocus={true}
                      mt="5px"
                    />
                    <Button onClick={updateName} mt="15px" fontWeight="normal">
                      Обновить
                    </Button>
                  </Box>
                </>
              )}
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default AttachmentsMenu;
