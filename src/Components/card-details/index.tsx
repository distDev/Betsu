import { Drawer, DrawerContent, DrawerOverlay, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import CardDetailsHeader from "./header";
import CardDetailsTitle from "./title";
import CardDetailsData from "./data";
import CardDetailsDescription from "./description";
import CardDetailsAttachments from "./attachments/CardDetailAttachments";
import CardDetailsCheckList from "./check-list";
import CardDetailsComments from "./comments";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: React.MutableRefObject<null>;
};

const CardDetails: FC<Props> = ({ isOpen, onClose, finalFocusRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent overflowY="auto" position="relative">
        <CardDetailsHeader />
        <Stack spacing="60px" p="25px">
          <CardDetailsTitle />
          <CardDetailsData />
          <CardDetailsDescription />
          <CardDetailsAttachments />
          <CardDetailsCheckList />
          <CardDetailsComments />
        </Stack>
      </DrawerContent>
    </Drawer>
  );
};

export default CardDetails;
