import { DrawerContent, Stack } from "@chakra-ui/react";
import { FC } from "react";
import CardDetailsHeader from "./header";
import CardDetailsTitle from "./title";
import CardDetailsData from "./data";
import CardDetailsDescription from "./description";
import CardDetailsAttachments from "./attachments/CardDetailAttachments";
import CardDetailsCheckList from "./check-list";
import CardDetailsComments from "./comments";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { taskApi } from "../../Api/task-api";
import useTask from "../../Hooks/useTask";

type Props = {};

const CardDetailsContent: FC<Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const idTask = useLocation().search.replace("?task=", "");
  const { id: idBoard } = useParams();

  const { name, desc, idList, labels } = useTask(idTask, idBoard!);

  const handleDeleteCard = () => {
    taskApi.deleteTask(idTask);
    setSearchParams("");
  };

  return (
    <DrawerContent overflowY="auto" position="relative">
      <CardDetailsHeader deleteCard={handleDeleteCard} labels={labels} />
      <Stack spacing="60px" p="25px">
        {name && <CardDetailsTitle name={name} idTask={idTask} idList={idList} />}
        <CardDetailsData labels={labels} />
        <CardDetailsDescription desc={desc} idTask={idTask} />
        <CardDetailsAttachments />
        <CardDetailsCheckList />
        <CardDetailsComments />
      </Stack>
    </DrawerContent>
  );
};

export default CardDetailsContent;
