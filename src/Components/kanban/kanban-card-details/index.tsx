import { Drawer, DrawerContent, DrawerOverlay, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import CardDetailHeader from "./detail-header";
import CardDetailTitle from "./detail-title";
import CardDetailData from "./detail-data";
import CardDetailDescription from "./detail-description";
import CardDetailAttachments from "./detail-attachments";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: React.MutableRefObject<null>;
};

const KanbanCardDetail: FC<Props> = ({ isOpen, onClose, finalFocusRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <CardDetailHeader />
        <Stack spacing="60px" p="25px">
          <CardDetailTitle />
          <CardDetailData />
          <CardDetailDescription />
          <CardDetailAttachments />
        </Stack>
      </DrawerContent>
    </Drawer>
  );
};

export default KanbanCardDetail;
