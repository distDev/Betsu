import { Box, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdAdd } from "react-icons/md";
import { labels } from "../../../Utils/data";
import LabelsListPopover from "../../popovers/labels-list";

type Props = {};

const CardDetailsLabels = (props: Props) => {
  return (
    <Box>
      <Text fontSize="12px" mb="6px">
        Метки
      </Text>
      <Stack direction="row" spacing="7px" h="35px">
        {labels.map((label) => (
          <Box
            key={label.id}
            bg={label.color}
            h="full"
            w="50px"
            borderRadius="5px"
          />
        ))}
        <LabelsListPopover>
          <IconButton
            aria-label="кнопка открывающая окно добавления метки"
            icon={<MdAdd />}
            bg="#F8F8FB"
            color="textSecond"
            variant="solid"
            h="full"
            borderRadius="5px"
          />
        </LabelsListPopover>
      </Stack>
    </Box>
  );
};

export default CardDetailsLabels;
