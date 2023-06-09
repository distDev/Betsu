import { Stack } from "@chakra-ui/react";
import React from "react";
import CardDetailLabels from "../detail-labels";
import CardDetailNotafications from "../detail-notafications";
import CardDetailDueDate from "../detail-due-date";

type Props = {};

const CardDetailData = (props: Props) => {
  return (
    <Stack direction="row" spacing="15px" flexWrap="wrap">
      <CardDetailLabels />
      <CardDetailNotafications />
      <CardDetailDueDate />
    </Stack>
  );
};

export default CardDetailData;
