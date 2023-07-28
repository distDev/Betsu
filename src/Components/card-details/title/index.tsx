import { Box, Text } from "@chakra-ui/react";
import { useState, FC } from "react";
import { AutoResizeTextarea } from "../../../Components/UI/AutoResizeTextarea";

type Props = {};

const CardDetailTitle: FC<Props> = () => {
  const [title, setTitle] = useState(
    "Сделать верстку главной страницы и протестировать"
  );
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
