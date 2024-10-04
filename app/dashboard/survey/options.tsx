"use client";
import {
  FormControl,
  RadioGroup,
  HStack,
  Radio,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

interface OptionsProps {
  selectedAnswer: number; // Keep this as number
  onAnswerSelect: (answer: number) => void; // Function now takes a number
  onSubmit: () => void;
  onPrevious: () => void;
}

const Options: React.FC<OptionsProps> = ({
  selectedAnswer,
  onAnswerSelect,
  onSubmit,
  onPrevious,
}) => {
  return (
    <FormControl
      as="fieldset"
      paddingLeft="17%"
      paddingTop="5%"
      fontSize="2xl"
      textColor="#928C8C"
    >
      <RadioGroup
        value={selectedAnswer?.toString() || ''}
        onChange={(value) => onAnswerSelect(parseInt(value, 10))} // Convert string to integer
      >
        <HStack spacing="50px">
          <Text>Disagree</Text>
          <Radio colorScheme="teal" value="1" sx={{ width: "100px", height: "100px" }} />
          <Radio colorScheme="teal" value="2" sx={{ width: "80px", height: "80px" }} />
          <Radio colorScheme="teal" value="3" sx={{ width: "60px", height: "60px" }} />
          <Radio colorScheme="teal" value="4" sx={{ width: "40px", height: "40px" }} />
          <Radio colorScheme="teal" value="5" sx={{ width: "60px", height: "60px" }} />
          <Radio colorScheme="teal" value="6" sx={{ width: "80px", height: "80px" }} />
          <Radio colorScheme="teal" value="7" sx={{ width: "100px", height: "100px" }} />
          <Text>Agree</Text>
        </HStack>
      </RadioGroup>

      <HStack justifyContent="space-between" width="85%" paddingTop="3%">
        <Button
          borderRadius="none"
          mt={4}
          bg="#7D9CB7"
          textColor="white"
          height="60px"
          width="150px"
          fontSize="lg"
          onClick={onPrevious}
        >
          BACK
        </Button>
        <Button
          borderRadius="none"
          mt={4}
          bg="#7D9CB7"
          textColor="white"
          height="60px"
          width="150px"
          fontSize="lg"
          onClick={onSubmit}
        >
          NEXT
        </Button>
      </HStack>
    </FormControl>
  );
};

export default Options;
