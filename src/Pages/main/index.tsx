import { Box, Stack } from "@chakra-ui/react";
import Boards from "./components/boards";
import { boardsData } from "../../Utils/data";

type Props = {};



const Main = (props: Props) => {
  return (
    <Stack spacing='50px'>
      <Boards title="Недавние" data={boardsData} />
      <Boards title="Все доски" data={boardsData} />
    </Stack>
  );
};

export default Main;
