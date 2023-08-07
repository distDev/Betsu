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
import { FC, ReactNode } from "react";

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
            >
              Вставить файл
              <input type="file" className="upload-input" />
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
