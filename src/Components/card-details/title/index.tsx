import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, FC } from "react";
import { AutoResizeTextarea } from "../../../Components/UI/AutoResizeTextarea";
import { useDebounce } from "../../../Hooks/useDebounce";
import { taskApi } from "../../../Api/task-api";
import { useAppSelector } from "../../../Hooks/useAppSelector";

type Props = {
  name: string;
  idTask: string;
  idList: string;
};

const CardDetailTitle: FC<Props> = ({ name, idTask, idList }) => {
  const [title, setTitle] = useState(name);
  const lists = useAppSelector((state) => state.lists.data);
  const currentList = lists.find((list) => list.id === idList);

  const debouncedValue = useDebounce<string>(title, 500);

  useEffect(() => {
    const updateTitle = async () => {
      await taskApi.updateTaskTitle({ id: idTask, name: debouncedValue });
    };
    updateTitle();
  }, [debouncedValue]);

  return (
    <Box>
      <AutoResizeTextarea
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        variant="unstyled"
        resize="none"
        fontSize="24px"
        mb="15px"
        color="textMain"
        fontWeight="semibold"
        p="0"
      />
      <Text color="textSecond">в колонке {currentList?.name}</Text>
    </Box>
  );
};

export default CardDetailTitle;
