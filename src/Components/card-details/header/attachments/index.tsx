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
  useDisclosure,
} from "@chakra-ui/react";
import { FC, ReactNode, useEffect } from "react";
import { MdAttachFile } from "react-icons/md";

type Props = {
  children: ReactNode;
};

const CardDetailsHeaderAttachments: FC<Props> = ({ children }) => {
  return (
    <Popover isLazy>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContainer />
    </Popover>
  );
};

const PopoverContainer: FC = () => {
  useEffect(() => {
    console.log("открылся");
  }, []);

  return (
    <>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Прикрепить файл</PopoverHeader>
        <PopoverBody py="10px">
          <Button
            variant="ghost"
            w="full"
            size="md"
            fontWeight="normal"
            bg="bgGrey"
            mb="15px"
          >
            С компьютера
          </Button>
          <Box>
            <Text mb="7px">Прикрепить ссылку</Text>
            <Input />
          </Box>
        </PopoverBody>
      </PopoverContent>
    </>
  );
};

export default CardDetailsHeaderAttachments;
