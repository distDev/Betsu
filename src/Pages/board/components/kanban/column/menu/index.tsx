import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";

type Props = {};

const ColumnMenu = (props: Props) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<MdMoreHoriz />}
        aria-label="Дополнительно"
        variant="solid"
        bg="white"
        color="textSecond"
      />
      <MenuList>
        <MenuGroup title="Действия с колонной">
          <MenuItem>Добавить карточку</MenuItem>
          <MenuItem>Копировать список</MenuItem>
          <MenuItem>Переместить список</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem>Автоматизация</MenuItem>
        <MenuDivider />
        <MenuItem>Удалить все карточки из списка</MenuItem>
        <MenuItem>Удалить список</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ColumnMenu;
