import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { taskApi } from "../../../Api/task-api";
import { useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const AttachmentsPopover: FC<Props> = ({ children }) => {
  return (
    <Popover isLazy>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContainer />
    </Popover>
  );
};

const PopoverContainer: FC = () => {
  const idTask = useLocation().search.replace("?task=", "");
  const [isFileLoading, setisFileLoading] = useState(false);

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      setisFileLoading(true);

      try {
        await taskApi.addAttachments({ file, id: idTask });
      } catch (error) {
        console.error("Произошла ошибка при загрузке файла: " + error);
      }

      setisFileLoading(false);
    }
    return;
  };

  return (
    <>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Прикрепить</PopoverHeader>
        <PopoverBody py="10px">
          <Box pb="20px">
            <Text fontSize="14px" fontWeight="medium">
              Прикрепите файл с компьютера
            </Text>
            <Text fontSize="12px" mb="12px" mt="8px">
              Вы можете просто перетянуть и отпустить файлы, чтобы выгрузить их.
            </Text>
            <Button
              position="relative"
              zIndex="10"
              w="full"
              color="textMain"
              fontSize="14px"
              fontWeight="normal"
              isLoading={isFileLoading}
            >
              Вставить файл
              <input
                type="file"
                onChange={handleUploadFile}
                className="upload-input"
              />
            </Button>
          </Box>
          <Box mb="15px">
            <FormControl>
              <FormLabel fontSize="14px" fontWeight="medium">
                Вставьте ссылку
              </FormLabel>
              <Input type="email" />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel fontSize="14px" fontWeight="medium">
                Текст файла
              </FormLabel>
              <Input type="email" />
            </FormControl>
          </Box>
          <Stack direction="row" mt="30px">
            <Spacer />
            <Button fontSize="14px" fontWeight="medium">
              Отмена
            </Button>
            <Button fontSize="14px" fontWeight="medium">
              Добавить
            </Button>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </>
  );
};

export default AttachmentsPopover;
