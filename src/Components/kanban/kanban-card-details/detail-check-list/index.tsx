import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {};

const CardDetailCheckList = (props: Props) => {
  return (
    <Box>
      <Text mb="15px" fontSize="16px" fontWeight="medium">
        Чек-лист
      </Text>
      <Stack spacing="10px">
        <Accordion
          allowMultiple
          display="flex"
          flexDirection="column"
          gap="10px"
        >
          {Array(3)
            .fill("_")
            .map((card) => (
              <AccordionItem bg="bgGrey" borderRadius="5px" border="none">
                <h2>
                  <AccordionButton p="15px">
                    <Box as="span" flex="1" textAlign="left">
                      UX дизайн
                    </Box>
                    <Box as="span">2 задач</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <Stack spacing="10px">
                      {Array(2)
                        .fill("_")
                        .map(() => (
                          <Box
                            display="flex"
                            gap="10px"
                            p="10px"
                            borderRadius="5px"
                            bg="white"
                          >
                            <Checkbox colorScheme="green">
                              <Text fontWeight="14px" color="textMain">
                                Сходить на занятия
                              </Text>
                            </Checkbox>
                          </Box>
                        ))}
                    </Stack>
                    <Button
                      bg="white"
                      size="md"
                      fontWeight="normal"
                      color="textMain"
                      mt="20px"
                    >
                      Добавить задачу
                    </Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Stack>
    </Box>
  );
};

export default CardDetailCheckList;
