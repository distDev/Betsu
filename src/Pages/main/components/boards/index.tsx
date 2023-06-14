import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiFillHeart } from "react-icons/ai";
import BoardsItems from "../boards-items";

interface Props {
  title: string;
  data: {
    id: string;
    name: string;
  }[];
}

const Boards: FC<Props> = ({ title, data }) => {
  return (
    <Box>
      <Text fontSize="26px" fontWeight="medium">
        {title}
      </Text>
      <Stack direction="row" overflowX="auto" spacing="30px" mt="20px">
        <BoardsItems data={data} />
      </Stack>
    </Box>
  );
};

export default Boards;
