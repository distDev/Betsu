import { Stack } from "@chakra-ui/react";
import React from "react";
import CardDetailLabels from "../detail-labels";

type Props = {};

const CardDetailData = (props: Props) => {
  return (
    <Stack direction="column" spacing="15px" flexWrap="wrap">
      <CardDetailLabels />
    </Stack>
  );
};

export default CardDetailData;
