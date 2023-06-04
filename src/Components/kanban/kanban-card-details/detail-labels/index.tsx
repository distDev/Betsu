import { Box, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

const CardDetailLabels = (props: Props) => {
  return (
    <Box>
      <Text fontSize="12px" mb="6px">
        Метки
      </Text>
      <Stack direction="row" spacing="7px" h="35px">
        <Box bg="#DCD1FA" h="full" w="50px" borderRadius="5px" />
        <Box bg="#D1FADF" h="full" w="50px" borderRadius="5px" />
        <IconButton
          aria-label="кнопка открывающая окно добавления метки"
          icon={<MdAdd />}
          bg="#F8F8FB"
          color="textSecond"
          variant="solid"
          h="full"
          borderRadius="5px"
        />
      </Stack>
    </Box>
  );
};

export default CardDetailLabels;
