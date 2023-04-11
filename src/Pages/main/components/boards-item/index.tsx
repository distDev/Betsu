import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

type Props = {
  id: string;
  name: string;
};

const BoardsItem = ({ id, name }: Props) => {
  return (
    <Card w="360px" h="175px" key={id} position="relative" overflow="hidden">
      <CardHeader zIndex="5">
        <Text color="white">{name}</Text>
      </CardHeader>
      <Spacer />
      <CardFooter justify="end" zIndex="5">
        <AiFillHeart />
      </CardFooter>
      <Image
        zIndex="0"
        position="absolute"
        w="100%"
        h="100%"
        top="0px"
        left="0px"
        src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjJTIwb3MlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80"
      />
      <Box
        zIndex="3"
        position="absolute"
        w="100%"
        h="100%"
        top="0px"
        left="0px"
        bg="black"
        opacity="0.6"
      />
    </Card>
  );
};

export default BoardsItem;
