import { IconButton, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { BsTag } from "react-icons/bs";
import { MdAccessTime, MdAttachFile, MdContentCopy, MdEast, MdOutlineCheckBox, MdOutlineDelete, MdOutlinePersonOutline } from "react-icons/md";

type Props = {};

const CardDetailHeader = (props: Props) => {
  return (
    <Stack
      spacing="10px"
      direction="row"
      p="5px 25px"
      borderBottom="1px solid #E6E6E6"
    >
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdOutlinePersonOutline />}
        color="textSecond"
      />
      <IconButton
        aria-label="кнопка для добавления вложения"
        variant="ghost"
        icon={<MdAttachFile />}
        color="textSecond"
      />
      <Spacer />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<BsTag />}
        color="textSecond"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdAccessTime />}
        color="textSecond"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdOutlineCheckBox />}
        color="textSecond"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdContentCopy />}
        color="textSecond"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdEast />}
        color="textSecond"
      />
      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdOutlineDelete />}
        color="textSecond"
      />
    </Stack>
  );
};

export default CardDetailHeader;
