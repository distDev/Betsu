import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {
  idBoard: string;
  name: string;
  cover: string;
};

const BoardsItem = ({ idBoard, name, cover }: Props) => {
  const handleAddToFavorites = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <Link to={"/board/" + idBoard}>
      <Card w="auto" h="175px" position="relative" overflow="hidden">
        <CardHeader zIndex="5">
          <Text color="white" fontSize="18px" fontWeight="medium">
            {name}
          </Text>
        </CardHeader>
        <Spacer />
        <CardFooter justify="end" zIndex="5">
          <IconButton
            icon={<AiFillHeart />}
            aria-label="Добавить в избранное"
            fontSize="20px"
            size="sm"
            variant="ghost"
            color="textSecond"
            border="none"
            _hover={{ bg: "none", color: "red" }}
            onClick={handleAddToFavorites}
          />
        </CardFooter>
        <Image
          zIndex="0"
          position="absolute"
          w="100%"
          h="100%"
          top="0px"
          left="0px"
          src={cover}
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
    </Link>
  );
};

export default BoardsItem;
