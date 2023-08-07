import { Stack } from "@chakra-ui/react";
import CardDetailsLabels from "../labels";
import CardDetailsNotafications from "../notafications";
import CardDetailsDueDate from "../due-date";
import { ILabel } from "../../../Types/board";
import { FC } from "react";

type Props = {
  labels: ILabel[];
};

const CardDetailData: FC<Props> = ({ labels }) => {
  return (
    <Stack direction="row" spacing="15px" flexWrap="wrap">
      <CardDetailsLabels labels={labels} />
      <CardDetailsNotafications />
      <CardDetailsDueDate />
    </Stack>
  );
};

export default CardDetailData;
