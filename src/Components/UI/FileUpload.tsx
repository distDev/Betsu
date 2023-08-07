import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Code,
  Icon,
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { useRef } from "react";

const FileUpload = ({
  name,
  placeholder,
  acceptedFileTypes,
  control,
  children,
  isRequired = false,
}) => {
  const inputRef = useRef();

  return (
    <FormControl>
      <FormLabel htmlFor="writeUpFile">{children}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiFile} />}
        />
        <input
          type="file"
          accept={acceptedFileTypes}
          name={name}
          ref={inputRef}
          {...inputProps}
          inputRef={ref}
          style={{ display: "none" }}
        ></input>
        <Input
          placeholder={placeholder || "Your file ..."}
          onClick={(e) => inputRef?.current.click()}
          value={value}
        />
      </InputGroup>
      <FormErrorMessage>{invalid}</FormErrorMessage>
    </FormControl>
  );
};

export default FileUpload;
