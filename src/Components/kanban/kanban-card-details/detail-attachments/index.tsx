import { Box, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";

type Props = {};

const CardDetailAttachments = (props: Props) => {
  return (
    <Box>
      <Text mb="15px" fontSize="16px" fontWeight="semibold">
        Описание
      </Text>
      <Stack spacing="15px">
        <Box display="flex" h="130px" justifyContent="space-between">
          <Box w="200px" h="full">
            <Image w="full" h="full" borderRadius="5px" />
          </Box>
          <Box w="350px">
            <Text
              color="textMain"
              fontSize="16px"
              fontWeight="medium"
              mb="15px"
            >
              Dance.jpg
            </Text>
            <Text color="textSecond" fontSize="14px">
              Добавлено в 22.02.34 в 15:38
            </Text>
          </Box>
          <IconButton
            aria-label="открыть дополнительные параметры"
            color="textSecond"
            bg="bgGrey"
            size="sm"
            borderRadius="5px"
            fontSize="19px"
            icon={<MdMoreVert />}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default CardDetailAttachments;
