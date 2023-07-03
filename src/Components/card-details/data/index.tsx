import { Stack } from "@chakra-ui/react";
import CardDetailsLabels from "../labels";
import CardDetailsNotafications from "../notafications";
import CardDetailsDueDate from "../due-date";

type Props = {};

const CardDetailData = (props: Props) => {
  return (
    <Stack direction="row" spacing="15px" flexWrap="wrap">
      <CardDetailsLabels />
      <CardDetailsNotafications />
      <CardDetailsDueDate />
    </Stack>
  );
};

export default CardDetailData;
