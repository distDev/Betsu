import { Box, IconButton, Spacer, Stack, Text } from "@chakra-ui/react";
import KanbanCard from "../kanban-card";
import { MdMoreHoriz } from "react-icons/md";
import { FC, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { cardsData } from "../../../Utils/data";

type Props = {
  name: string;
  id: string;
  position: number;
  index: number;
};

const KanbanColumn: FC<Props> = ({ name, id, position, index }) => {
  const [cards, setCards] = useState(cardsData);

  const filteredCards = cards.filter((e) => e.idList === id);
  const sortedCards = [...filteredCards].sort(
    (a, b) => a.position - b.position
  );

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box w="360px">
            <Box
              p="5px 8px"
              mb="10px"
              display="flex"
              alignItems="center"
              bg="white"
              borderRadius="8px"
            >
              <Text ml="12px">{name }</Text>
              <Spacer />
              <IconButton
                aria-label="Дополнительная информация"
                variant="solid"
                bg="white"
                icon={<MdMoreHoriz />}
                color="textSecond"
              ></IconButton>
            </Box>
            <Droppable droppableId={id} direction="vertical" type="COLUMN">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Stack direction="column" spacing="10px">
                    {sortedCards.map((card, i) => (
                      <KanbanCard
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        description={card.description}
                        index={i}
                      />
                    ))}
                    {provided.placeholder}
                  </Stack>
                </div>
              )}
            </Droppable>
          </Box>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanColumn;
