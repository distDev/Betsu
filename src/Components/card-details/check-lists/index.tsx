import { Stack } from "@chakra-ui/react";
import { checkLists } from "../../../Utils/data";
import CheckListsItem from "./item";

type Props = {};

const CardDetailsCheckLists = (props: Props) => {
  return (
    <Stack direction="column" spacing="60px">
      {checkLists.map((checklist) => (
        <CheckListsItem items={checklist.items} name={checklist.name} />
      ))}
    </Stack>
  );
};

export default CardDetailsCheckLists;
