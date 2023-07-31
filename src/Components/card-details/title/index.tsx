import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, FC } from "react";
import { AutoResizeTextarea } from "../../../Components/UI/AutoResizeTextarea";
import { useDebounce } from "../../../Hooks/useDebounce";
import { taskApi } from "../../../Api/task-api";

type Props = {
  name: string;
  idTask: string;
};

const CardDetailTitle: FC<Props> = ({ name, idTask }) => {
  const [title, setTitle] = useState(name);
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
      <Text color="textSecond">в колонке Не выполнено</Text>
    </Box>
  );
};

export default CardDetailTitle;
