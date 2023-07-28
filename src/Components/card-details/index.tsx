import { Drawer, DrawerContent, DrawerOverlay, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import CardDetailsHeader from "./header";
import CardDetailsTitle from "./title";
import CardDetailsData from "./data";
import CardDetailsDescription from "./description";
import CardDetailsAttachments from "./attachments/CardDetailAttachments";
import CardDetailsCheckList from "./check-list";
import CardDetailsComments from "./comments";
import { useLocation, useSearchParams } from "react-router-dom";
import { taskApi } from "../../Api/task-api";
import { useAppSelector } from "../../Hooks/useAppSelector";
import CardDetailsContent from "./Content";

type Props = {
  isOpen: boolean;
};

const CardDetails: FC<Props> = ({ isOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={() => setSearchParams("")}
      size="lg"
    >
      <DrawerOverlay />
      {isOpen && <CardDetailsContent />}
    </Drawer>
  );
};

export default CardDetails;
