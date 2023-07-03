import { IconButton, Spacer, Stack } from "@chakra-ui/react";
import СardDetailHeaderUsers from "./users/index";
import React from "react";
import { BsTag } from "react-icons/bs";
import {
  MdAccessTime,
  MdAttachFile,
  MdContentCopy,
  MdEast,
  MdOutlineCheckBox,
  MdOutlineDelete,
} from "react-icons/md";
import CardDetailHeaderAttachments from "./attachments";
import KanbanCardDetailHeaderCheckList from "./check-list";
import KanbanCardDetailHeaderLabels from "./labels";

type Props = {};

const CardDetailHeader = (props: Props) => {
  return (
    <Stack
      spacing="10px"
      direction="row"
      p="5px 25px"
      borderBottom="1px solid #E6E6E6"
      position="sticky"
      top="0px"
      bg="white"
      w="full"
      zIndex="100"
    >
      <СardDetailHeaderUsers />
      <CardDetailHeaderAttachments>
        <IconButton
          aria-label="кнопка для добавления вложения"
          variant="ghost"
          icon={<MdAttachFile />}
          color="textSecond"
          fontSize="19px"
        />
      </CardDetailHeaderAttachments>
      <Spacer />
      <KanbanCardDetailHeaderLabels>
        <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<BsTag />}
          color="textSecond"
          fontSize="19px"
        />
      </KanbanCardDetailHeaderLabels>

      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdAccessTime />}
        color="textSecond"
        fontSize="19px"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdOutlineCheckBox />}
        color="textSecond"
        fontSize="19px"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdContentCopy />}
        color="textSecond"
        fontSize="19px"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdEast />}
        color="textSecond"
        fontSize="19px"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdOutlineDelete />}
        color="textSecond"
        fontSize="19px"
      />
    </Stack>
  );
};

export default CardDetailHeader;
