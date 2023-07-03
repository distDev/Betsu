import ResizeTextarea from "react-textarea-autosize";
import React from "react";
import { Textarea } from "@chakra-ui/react";

export const AutoResizeTextarea = React.forwardRef((props: any, ref: any) => {
  return (
    <Textarea
      minH="unset"
      overflow="hidden"
      w="100%"
      resize="none"
      ref={ref}
      minRows={1}
      as={ResizeTextarea}
      {...props}
    />
  );
});
