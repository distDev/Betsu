import { Box, Checkbox, IconButton, Text } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {};

const CardDetailDueDate = (props: Props) => {
  return (
    <Box>
      <Text fontSize="12px" mb="6px">
        Срок
      </Text>
      <Box
        h="35px"
        borderRadius="5px"
        bg="bgGrey"
        display="flex"
        alignItems="center"
        p="0px 8px"
        gap="10px"
      >
        <Checkbox color='bgGreen' />
        <Text color="textMain" fontSize="14px">
          В пятницу в 18:28
        </Text>
        <IconButton
          aria-label="кнопка открытия окно для изменения срока"
          icon={<MdKeyboardArrowDown />}
          size="sm"
          variant="ghost"
        
        />
      </Box>
    </Box>
  );
};

export default CardDetailDueDate;
