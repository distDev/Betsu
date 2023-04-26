import { Box, Center, IconButton, Spacer, Stack, Text } from "@chakra-ui/react";
import KanbanCard from "../kanban-card";
import { MdMoreHoriz } from "react-icons/md";
import { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddCard from "../add-card";

type Props = {
  name: string;
  id: string;
  index: number;
  tasks: {
    id: string;
    description: string;
    name: string;
    position: number;
    cover: {
      color: string;
    };
    checkLists: never[];
    idBoard: string;
    idList: string;
  }[];
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        description: string;
        name: string;
        position: number;
        cover: {
          color: string;
        };
        checkLists: never[];
        idBoard: string;
        idList: string;
      }[]
    >
  >;
};

const KanbanColumn: FC<Props> = ({ name, id, tasks, index, setTasks }) => {
  const filteredCards = tasks.filter((e) => e.idList === id);
  const sortedCards = [...filteredCards].sort(
    (a, b) => a.position - b.position
  );

  const handleAddTask = (data: { name: string; position: number }) => {
    setTasks([
      ...tasks,
      {
        id: "1231",
        description: "",
        name: data.name,
        position: data.position,
        cover: {
          color: "",
        },
        checkLists: [],
        idBoard: "1",
        idList: id,
      },
    ]);
  };

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
              <IconButton
                aria-label="Дополнительная информация"
                variant="solid"
                bg="white"
                icon={<MdMoreHoriz />}
                color="textSecond"
              ></IconButton>
            </Box>
            <Droppable droppableId={id} direction="vertical" type="task">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Stack direction="column" spacing="0px">
                    {sortedCards.map((card, i) => (
                      <KanbanCard
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        description={card.description}
                        index={i}
                      />
                    ))}
                  </Stack>

                  {provided.placeholder}
                  <AddCard handleAddTask={handleAddTask} sortedCards={sortedCards}/>
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
