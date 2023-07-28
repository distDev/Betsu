import {
  Box,
  Button,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { MdPeople } from "react-icons/md";

type Props = {};

const BoardHeaderUsers = (props: Props) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="кнопка отркытия списка пользователей"
            variant="solid"
            bg="white"
            icon={<MdPeople />}
          />
        </PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Пользователи доски</PopoverHeader>
          <PopoverBody>
            <Stack spacing="10px" mt="10px">
              {Array(3)
                .fill("_")
                .map((_, i) => (
                  <Box
                    minH="40px"
                    display="flex"
                    w="full"
                    justifyContent="space-between"
                    key={i}
                  >
                    <Box display="flex">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://bit.ly/dan-abramov"
                        alt="Simon the pensive"
                        mr="12px"
                      />
                      <span>Simon the pensive</span>
                    </Box>
                    <IconButton
                      aria-label="управление пользователем"
                      variant="ghost"
                      icon={<MdMoreVert />}
                      ml="20px  "
                    />
                  </Box>
                ))}
            </Stack>

            <Button
              mt="30px"
              variant="solid"
              size="md"
              fontWeight="normal"
              w="full"
            >
              Добавить пользователя
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default BoardHeaderUsers;
