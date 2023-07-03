import {
  Box,
  Button,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { MdAttachFile } from "react-icons/md";

type Props = {
  children: ReactNode;
};

const CardDetailsHeaderAttachments: FC<Props> = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger>
        {children}
        {/* <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<MdAttachFile />}
          color="textSecond"
          fontSize="19px"
        /> */}
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Прикрепить файл</PopoverHeader>
        <PopoverBody py='10px'>
          <Button
            variant="ghost"
            w="full"
            size="md"
            fontWeight="normal"
            bg="bgGrey"
            mb='15px'
          >
            С компьютера
          </Button>
          <Box>
            <Text mb='7px'>Прикрепить ссылку</Text>
            <Input />
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CardDetailsHeaderAttachments;
