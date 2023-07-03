import { Box, Button, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const CardDetailsComments = (props: Props) => {
  const [editing, setEditing] = useState(false);

  return (
    <Box>
      <Text mb="15px" fontSize="16px" fontWeight="medium">
        Комментарии
      </Text>
      <Box>
        {!editing && (
          <Button
            w="full"
            h="100px"
            bg="bgGrey"
            borderRadius="5px"
            position="relative"
            onClick={() => setEditing((prev) => !prev)}
          >
            <Text
              position="absolute"
              top="15px"
              left="15px"
              fontSize="14px"
              fontWeight="normal"
              color="textSecond"
            >
              Добавить комментарий
            </Text>
          </Button>
        )}

        {editing && (
          <Box>
            <Textarea w="full" h="130px" borderRadius="5px" />
            <Stack direction="row" spacing="10px" mt="10px">
              <Button
                variant="solid"
                colorScheme="linkedin"
                size="md"
                fontWeight="normal"
                fontSize="14px"
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
      </Box>

      <Stack>
        
      </Stack>
    </Box>
  );
};

export default CardDetailsComments;
