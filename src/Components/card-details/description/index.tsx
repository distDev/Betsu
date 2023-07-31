import { Box, Button, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState, FC } from "react";
import { taskApi } from "../../../Api/task-api";

type Props = {
  desc: string;
  idTask: string;
};

const CardDetailsDescription: FC<Props> = ({ desc, idTask }) => {
  const [editing, setEditing] = useState(false);
  const [descriptrion, setDescriptrion] = useState("");

  const handleEdit = () => {
    setDescriptrion(desc);
    setEditing(true);
  };

  const handleSave = async () => {
    await taskApi.updateTaskDesc({ id: idTask, desc: descriptrion });
    setEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptrion(e.target.value);
  };

  return (
    <Box>
      <Text mb="15px" fontSize="16px" fontWeight="medium">
        Описание
      </Text>

      {!editing && desc && (
        <Box onClick={handleEdit}>
          <Text>{desc}</Text>
        </Box>
      )}

      {editing && (
        <Box>
          <Textarea
            w="full"
            h="130px"
            borderRadius="5px"
            value={descriptrion}
            onChange={handleChange}
          />
          <Stack direction="row" spacing="10px" mt="10px">
            <Button
              variant="solid"
              colorScheme="linkedin"
              size="md"
              fontWeight="normal"
              fontSize="14px"
              onClick={handleSave}
            >
              Сохранить
            </Button>
            <Button
              variant="ghost"
              size="md"
              fontWeight="normal"
              fontSize="14px"
              color="textMain"
              onClick={() => setEditing((prev) => !prev)}
            >
              Отмена
            </Button>
          </Stack>
        </Box>
      )}

      {!editing && !desc && (
        <Button
          w="full"
          h="100px"
          bg="bgGrey"
          borderRadius="5px"
          position="relative"
          onClick={handleEdit}
        >
          <Text
            position="absolute"
            top="15px"
            left="15px"
            fontSize="14px"
            fontWeight="normal"
            color="textSecond"
          >
            Добавить подробное описание
          </Text>
        </Button>
      )}
    </Box>
  );
};

export default CardDetailsDescription;
