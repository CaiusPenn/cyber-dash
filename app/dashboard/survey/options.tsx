"use client";
import {
  FormControl,
  RadioGroup,
  HStack,
  Radio,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";


interface OptionsProps {
  selectedAnswer: number; 
  onAnswerSelect: (answer: number) => void; 
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
      textAlign="center"
      fontSize="2xl"
      textColor="#928C8C"
      mt={8}
    >
      <Flex justifyContent="center" alignItems="center">
      <RadioGroup
        value={selectedAnswer?.toString() || ''}
        onChange={(value) => onAnswerSelect(parseInt(value, 10))} 
      >
      
        <HStack spacing="50px" justifyContent="center" alignItems="center" maxWidth="800px">
          <Text>Disagree</Text>
          <Radio colorScheme="teal" value="1" sx={{ width: "100px", height: "100px", border: "1px solid teal" }} />
          <Radio colorScheme="teal" value="2" sx={{ width: "80px", height: "80px", border: "1px solid teal" }} />
          <Radio colorScheme="teal" value="3" sx={{ width: "60px", height: "60px", border: "1px solid teal" }} />
          <Radio colorScheme="teal" value="4" sx={{ width: "40px", height: "40px", border: "1px solid teal" }} />
          <Radio colorScheme="teal" value="5" sx={{ width: "60px", height: "60px", border: "1px solid teal" }} />
          <Radio colorScheme="teal" value="6" sx={{ width: "80px", height: "80px", border: "1px solid teal" }} />
          <Radio colorScheme="teal" value="7" sx={{ width: "100px", height: "100px", border: "1px solid teal" }} />
          <Text>Agree</Text>
        </HStack>  
      </RadioGroup>
      </Flex>

      <Flex justifyContent="center" mt={8}>
      <HStack spacing="50px">
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
      </Flex>
    </FormControl>
  );
};

export default Options;
