import { FC } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  Input,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";

type Props = {
  name: string;
  items: any[];
};

const CheckListsItem: FC<Props> = ({ name, items }) => {
  const calculateCompletionPercentage = () => {
    let completedCount = 0;

    for (let i = 0; i < items.length; i++) {
      if (items[i].completed) {
        completedCount++;
      }
    }

    return Math.floor((completedCount / items.length) * 100);
  };

  return (
    <Box>
      <Box display="flex">
        <Text mb="15px" fontSize="16px" fontWeight="medium">
          {name}
        </Text>
        <Spacer />
        <IconButton
          aria-label="открыть дополнительные параметры"
          color="textSecond"
          variant="ghost"
          size="sm"
          borderRadius="5px"
          fontSize="16px"
          icon={<MdMoreVert />}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Text w="35px" color="textSecond" fontSize="14px" fontWeight="normal">
          {calculateCompletionPercentage()}%
        </Text>
        <Box
          ml="10px"
          w="full"
          h="5px"
          bg="bgGrey"
          borderRadius="5px"
          overflow="hidden"
        >
          <Box
            w={calculateCompletionPercentage() + "%"}
            h="full"
            bg="#46F3A0"
          ></Box>
        </Box>
      </Box>

      <List mt="15px" spacing="3">
        {items.map((item) => (
          <ListItem key={item.name}>
            <Checkbox defaultChecked={item.completed}>{item.name}</Checkbox>
          </ListItem>
        ))}
        <ListItem>
          <Input
            variant="unstyled"
            placeholder="Добавить задачу..."
            pl="22px"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default CheckListsItem;
