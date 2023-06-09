import { Box, Button, Text } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";

type Props = {};

const CardDetailNotafications = (props: Props) => {
  return (
    <Box>
      <Text fontSize="12px" mb="6px">
        Уведомления
      </Text>
      <Button
        h="35px"
        variant="solid"
        borderRadius="5px"
        bg="bgGrey"
        color="textMain"
        fontSize="14px"
        fontWeight="normal"
        leftIcon={<AiOutlineEye />}
      >
        Подписаться
      </Button>
    </Box>
  );
};

export default CardDetailNotafications;
