import {
  Box,
  Checkbox,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdFilterList } from "react-icons/md";

type Props = {};

const BoardHeaderFilters = (props: Props) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="открытие фильтра карточек"
            variant="solid"
            bg="white"
            icon={<MdFilterList />}
            color="textSecond"
          />
        </PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Фильтр</PopoverHeader>
          <PopoverBody mt="15px">
            <Stack spacing="15px">
              <Box display="flex" flexDirection="column" gap="10px">
                <Text fontSize="sm" fontWeight="medium">
                  По ключевым словам
                </Text>
                <Input placeholder="Поиск по карточкам"/>
              </Box>
              <Box display="flex" flexDirection="column" gap="10px">
                <Text fontSize="sm" fontWeight="medium">
                  Участники
                </Text>
                <Stack spacing="10px">
                  <Checkbox value="Нет участников">Нет учатников</Checkbox>
                  <Checkbox value="Distdev">Distdev</Checkbox>
                </Stack>
              </Box>
              <Box display="flex" flexDirection="column" gap="10px">
                <Text fontSize="sm" fontWeight="medium">
                  Срок
                </Text>
                <Stack spacing="10px">
                  <Checkbox value="Без даты">Без даты</Checkbox>
                  <Checkbox value="Просроченные">Просроченные</Checkbox>
                  <Checkbox value="Срок истекает в течение суток">
                    Срок истекает в течение суток
                  </Checkbox>
                  <Checkbox value="Срок истекает в течение недели">
                    Срок истекает в течение недели
                  </Checkbox>
                  <Checkbox value="Срок истекает в течение месяца">
                    Срок истекает в течение месяца
                  </Checkbox>
                  <Checkbox value="Отмечено как выполненное">
                    Отмечено как выполненное
                  </Checkbox>
                  <Checkbox value="Не отмечено как выполненное">
                    Не отмечено как выполненное
                  </Checkbox>
                </Stack>
              </Box>
              <Box display="flex" flexDirection="column" gap="10px">
                <Text fontSize="sm" fontWeight="medium">
                  Метки
                </Text>
                <Stack spacing="10px">
                  <Checkbox value="Нет участников">Нет учатников</Checkbox>
                  <Checkbox value="Distdev">Distdev</Checkbox>
                </Stack>
              </Box>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default BoardHeaderFilters;
