import { FC } from "react";
import {
  Box,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { IAttach } from "../../../Types/board";
import AttachmentsMenu from "./menu";
import AttachmentsCover from "./cover";

type Props = {
  attachments: IAttach[];
};

const CardDetailsAttachments: FC<Props> = ({ attachments }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box>
      <Text mb="15px" fontSize="16px" fontWeight="medium">
        Вложения
      </Text>
      <Stack spacing="15px">
        {attachments.map((attach) => (
          <Box display="flex" h="130px" justifyContent="space-between">
            <Box w="200px" h="full" bg="bgGrey" borderRadius="6px">
              <AttachmentsCover img={attach.url} type={attach.type} />
            </Box>
            <Box w="350px">
              <Link
                color="textMain"
                fontSize="16px"
                fontWeight="medium"
                mb="15px"
                href={attach.url}
                isExternal
              >
                {attach.fileName}
              </Link>
              <Text color="textSecond" fontSize="14px">
                Добавлено в 22.02.34 в 15:38
              </Text>
            </Box>
            <AttachmentsMenu
              fileName={attach.fileName}
              id={attach.id}
            >
              <IconButton
                onClick={onToggle}
                aria-label="открыть дополнительные параметры"
                color="textSecond"
                bg="bgGrey"
                size="sm"
                borderRadius="5px"
                fontSize="19px"
                icon={<MdMoreVert />}
              />
            </AttachmentsMenu>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CardDetailsAttachments;
