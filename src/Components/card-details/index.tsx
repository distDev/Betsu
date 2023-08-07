import { Drawer, DrawerOverlay } from "@chakra-ui/react";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
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
