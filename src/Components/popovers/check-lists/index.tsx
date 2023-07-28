import {
  Box,
  Button,
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

type Props = {
  children: ReactNode;
};

const CheckListsPopover: FC<Props> = ({ children }) => {
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

export default CheckListsPopover;
