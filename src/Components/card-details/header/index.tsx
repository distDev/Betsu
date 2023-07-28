import { IconButton, Spacer, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { BsTag } from "react-icons/bs";
import {
  MdAccessTime,
  MdAttachFile,
  MdContentCopy,
  MdEast,
  MdOutlineCheckBox,
  MdOutlineDelete,
  MdOutlinePersonOutline,
} from "react-icons/md";
import UsersListPopover from "../../popovers/user-list";
import AttachmentsPopover from "../../popovers/attachments";
import LabelsListPopover from "../../popovers/labels-list";
import DueDatePopover from "../../popovers/due-date";
import CheckListsPopover from "../../popovers/check-lists";
import CopyCardPopover from "../../popovers/copy-card";
import MoveCardPopover from "../../popovers/move-card";

type Props = {
  deleteCard: () => void;
};

const CardDetailHeader: FC<Props> = ({ deleteCard }) => {
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
      <UsersListPopover>
        <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<MdOutlinePersonOutline />}
          color="textSecond"
          fontSize="19px"
        />
      </UsersListPopover>
      <AttachmentsPopover>
        <IconButton
          aria-label="кнопка для добавления вложения"
          variant="ghost"
          icon={<MdAttachFile />}
          color="textSecond"
          fontSize="19px"
        />
      </AttachmentsPopover>
      <Spacer />
      <LabelsListPopover>
        <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<BsTag />}
          color="textSecond"
          fontSize="19px"
        />
      </LabelsListPopover>
      <DueDatePopover>
        <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<MdAccessTime />}
          color="textSecond"
          fontSize="19px"
        />
      </DueDatePopover>
      <CheckListsPopover>
        <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<MdOutlineCheckBox />}
          color="textSecond"
          fontSize="19px"
        />
      </CheckListsPopover>
      <CopyCardPopover>
        <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<MdContentCopy />}
          color="textSecond"
          fontSize="19px"
        />
      </CopyCardPopover>

      <MoveCardPopover>
        <IconButton
          aria-label="кнопка открытия списка пользователей"
          variant="ghost"
          icon={<MdEast />}
          color="textSecond"
          fontSize="19px"
        />
      </MoveCardPopover>

      <IconButton
        aria-label="кнопка открытия списка пользователей"
        variant="ghost"
        icon={<MdOutlineDelete />}
        color="textSecond"
        fontSize="19px"
        onClick={deleteCard}
      />
    </Stack>
  );
};

export default CardDetailHeader;
