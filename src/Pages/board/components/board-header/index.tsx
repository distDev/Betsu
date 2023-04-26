import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { MdPublic, MdFilterList, MdPeople, MdMoreHoriz } from "react-icons/md";

type Props = {};

const BoardHeader = (props: Props) => {
  return (
    <Flex>
      <Text fontSize="26px" fontWeight="semibold" color="textMain">
        Fortuna
      </Text>
      <Stack direction="row" ml="90px" spacing="3px">
        <IconButton
          aria-label="Добавить в избранное"
          variant="ghost"
          icon={<AiFillHeart />}
          color="textSecond"
        ></IconButton>
        <Divider orientation="vertical" color="textSecond" />
        <Button
          variant="ghost"
          leftIcon={<MdPublic />}
          color="textSecond"
          fontSize="18px"
          fontWeight="normal"
        >
          Публичная
        </Button>
      </Stack>
      <Spacer />
      <Stack spacing="10px" direction="row" h="40px">
        <IconButton
          aria-label="Пользователи"
          variant="solid"
          bg="white"
          icon={<MdPeople />}
          color="textSecond"
        />
        <IconButton
          aria-label="Фильтр"
          variant="solid"
          bg="white"
          icon={<MdFilterList />}
          color="textSecond"
        />
        <Stack
          direction="row"
          bg="white"
          p="5px"
          boxSizing="border-box"
          borderRadius="6px"
        >
          <Button
            h="100%"
            fontSize="16px"
            fontWeight="normal"
            bg="#F2F4F7"
            borderRadius="4px"
          >
            Доска
          </Button>
          <Button
            h="100%"
            fontSize="16px"
            fontWeight="normal"
            bg="none"
            borderRadius="4px"
          >
            Календарь
          </Button>
        </Stack>
        <IconButton
          aria-label="Дополнительная информация"
          variant="solid"
          bg="white"
          icon={<MdMoreHoriz />}
          color="textSecond"
        />
      </Stack>
    </Flex>
  );
};

export default BoardHeader;
