import { Box, Stack } from "@chakra-ui/react";
import Boards from "./components/boards";

type Props = {};

const boardsData = [
  {
    id: "1",
    name: "Fortuna",
  },
  {
    id: "1",
    name: "Excellent",
  },
];

const Main = (props: Props) => {
  return (
    <Stack padding="40px" spacing='50px'>
      <Boards title="Недавние" data={boardsData} />
      <Boards title="Все доски" data={boardsData} />
    </Stack>
  );
};

export default Main;
