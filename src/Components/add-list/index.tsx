import { Box, Button, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

type Props = {
  handleAddList: any;
};

const AddList: FC<Props> = ({ handleAddList }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [columName, setColumName] = useState("");

  const handleClear = () => {
    setIsAdding((prev) => !prev);
    setColumName("");
  };

  const handleAdd = () => {
    if (columName) {
      handleAddList(columName);
      handleClear();
    }
    return;
  };

  return (
    <Box
      w="360px"
      h={isAdding ? "100px" : "50px"}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="8px"
      bg={isAdding ? "white" : "#e8eaed"}
      p="10px"
    >
      {isAdding && (
        <>
          <Input
            autoFocus
            value={columName}
            onChange={(e) => setColumName(e.target.value)}
          />
          <Stack mt="10px" direction="row">
            <Button
              onClick={handleAdd}
              size="sm"
              p="15px 10px"
              colorScheme="messenger"
              fontWeight="medium"
            >
              Добавить список
            </Button>
            <IconButton
              onClick={handleClear}
              icon={<MdClose />}
              aria-label="Отменить"
              variant="ghost"
              size="sm"
            />
          </Stack>
        </>
      )}

      {!isAdding && (
        <Button
          onClick={() => setIsAdding((prev) => !prev)}
          leftIcon={<MdAdd />}
          variant="ghost"
          w="100%"
          h="100%"
          bg="none"
          fontSize="16px"
          fontWeight="normal"
          color="textMain"
        >
          Добавить колонку
        </Button>
      )}
    </Box>
  );
};

export default AddList;
