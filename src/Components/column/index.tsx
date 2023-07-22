import { Box, Spacer, Stack, Text } from "@chakra-ui/react";
import Card from "../../Components/card";
import { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ColumnMenu from "./menu";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useParams } from "react-router-dom";
import AddTaskForm from "./add-task";

type Props = {
  name: string;
  id: string;
  index: number;
};

const Column: FC<Props> = ({ name, id, index }) => {
  const tasks = useAppSelector((state) => state.tasks.list);
  const filteredCards = tasks
    .filter((e) => e.idList === id)
    .sort((a, b) => a.position! - b.position!);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box w="360px" mr="30px" minH="200px">
            <Box
              p="5px 8px"
              mb="5px"
              display="flex"
              alignItems="center"
              bg="white"
              borderRadius="8px"
            >
              <Text ml="12px">{name}</Text>
              <Spacer />
              <ColumnMenu />
            </Box>
            <Droppable droppableId={id} direction="vertical" type="task">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Stack direction="column" spacing="0px">
                    {filteredCards.map((card, i) => (
                      <Card
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        desc={card.desc}
                        checkItemsCheckedCount={card.checkItemsCheckedCount}
                        checkItemsCount={card.checkItemsCount}
                        closed={card.closed}
                        commentsCount={card.commentsCount}
                        due={card.due}
                        dueComplete={card.dueComplete}
                        fileCount={card.fileCount}
                        idMembers={card.idMembers}
                        labels={card.labels}
                        start={card.start}
                        index={i}
                      />
                    ))}
                  </Stack>
                  {provided.placeholder}
                  <AddTaskForm
                    sortedCards={filteredCards}
                  />
                </div>
              )}
            </Droppable>
          </Box>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
