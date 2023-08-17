import { FC } from "react";
import { Box, Center, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import danceImage from "../../../Assets/images/dance.jpg";
import { IAttach } from "../../../Types/board";

type Props = {
  attachments: IAttach[];
};

const CardDetailsAttachments: FC<Props> = ({ attachments }) => {
  return (
    <Box>
      <Text mb="15px" fontSize="16px" fontWeight="medium">
        Вложения
      </Text>
      <Stack spacing="15px">
        {attachments.map((attach) => (
          <Box display="flex" h="130px" justifyContent="space-between">
            <Box w="200px" h="full" bg="bgGrey" borderRadius="6px">
              {attach.type.startsWith("image") ? (
                <Image
                  w="full"
                  h="full"
                  objectFit="cover"
                  borderRadius="5px"
                  src={attach.url}
                />
              ) : (
                <Center h="full">
                  <Text fontWeight='semibold' fontSize='20px'>{attach.type.split("/")[1]}</Text>
                </Center>
              )}
            </Box>
            <Box w="350px">
              <Text
                color="textMain"
                fontSize="16px"
                fontWeight="medium"
                mb="15px"
              >
                {attach.fileName}
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
        ))}
      </Stack>
    </Box>
  );
};

export default CardDetailsAttachments;
