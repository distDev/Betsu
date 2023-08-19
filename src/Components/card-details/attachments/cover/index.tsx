import { Center, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  type: string;
  img: string;
};

const AttachmentsCover: FC<Props> = ({ type, img }) => {
  return (
    <>
      {type.startsWith("image") ? (
        <Image
          w="full"
          h="full"
          objectFit="cover"
          borderRadius="5px"
          src={img}
        />
      ) : (
        <Center h="full">
          <Text fontWeight="semibold" fontSize="20px">
            {type.split("/")[1]}
          </Text>
        </Center>
      )}
    </>
  );
};

export default AttachmentsCover;
