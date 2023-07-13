import { Box, Button, Center, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import BoardsItems from "../boards-items";

interface Props {
  title: string;
  data: {
    idBoard: string;
    name: string;
    cover: string;
  }[];
  allBoards?: boolean;
}

const Boards: FC<Props> = ({ title, data, allBoards }) => {
  return (
    <>
      <Box>
        <Text fontSize="20px" fontWeight="medium">
          {title}
        </Text>
        <SimpleGrid columns={3} spacing="15px" mt="20px">
          <BoardsItems data={data} />
          {allBoards && (
            <Button
              w="auto"
              h="175px"
              borderRadius="6px"
              bg="white"
              fontWeight="normal"
              color="textSecond"
              border="1px dashed #CCCCCC" 
            >
              <Center>Добавить доску</Center>
            </Button>
          )}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Boards;
