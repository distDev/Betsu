import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const CardDetailTitle = (props: Props) => {
  return (
    <Box>
      <Text mb="15px" fontSize="24px" color="textMain" fontWeight='semibold'>
        Сделать верстку главной страницы и протестировать
      </Text>
      <Text color="textSecond">в колонке Не выполнено</Text>
    </Box>
  );
};

export default CardDetailTitle;
