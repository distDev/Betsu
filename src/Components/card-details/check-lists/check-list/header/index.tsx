import { FC } from "react";
import { Box, IconButton, Spacer, Text } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { ITodo } from "../../../../../Types/board";

type Props = {
  items: ITodo[];
  name: string;
};

const CheckListHeader: FC<Props> = ({ items, name }) => {
  // Рассчет завершенности чек-листа в процентах
  const calculateCompletion = () => {
    if (!items.length) {
      return 0;
    }
    let completedCount = 0;

    for (let i = 0; i < items.length; i++) {
      if (items[i].completed) {
        completedCount++;
      }
    }

    return Math.floor((completedCount / items.length) * 100);
  };

  return (
    <>
      <Box display="flex">
        <Text mb="15px" fontSize="16px" fontWeight="medium">
          {name}
        </Text>
        <Spacer />
        <IconButton
          aria-label="открыть дополнительные параметры"
          color="textSecond"
          variant="ghost"
          size="sm"
          borderRadius="5px"
          fontSize="16px"
          icon={<MdMoreVert />}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Text w="35px" color="textSecond" fontSize="14px" fontWeight="normal">
          {calculateCompletion()}%
        </Text>
        <Box
          ml="10px"
          w="full"
          h="5px"
          bg="bgGrey"
          borderRadius="5px"
          overflow="hidden"
        >
          <Box w={calculateCompletion() + "%"} h="full" bg="#46F3A0"></Box>
        </Box>
      </Box>
    </>
  );
};

export default CheckListHeader;
