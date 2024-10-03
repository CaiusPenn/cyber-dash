"use client";
import {
  FormControl,
  RadioGroup,
  HStack,
  Radio,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Options = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleSubmit = () => {
    // submit this back to the database
    console.log(selectedValue);
  };

  return (
    <FormControl
      as="fieldset"
      paddingLeft="17%"
      paddingTop="5%"
      fontSize="2xl"
      textColor="#928C8C"
    >
      <RadioGroup
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
      >
        <HStack spacing="50px">
          <Text>Disagree</Text>
          <Radio
            colorScheme="teal"
            sx={{
              width: "100px",
              height: "100px",
              fontSize: "12px",
              // Custom styles if needed
            }}
            value="1"
          ></Radio>
          <Radio
            colorScheme="teal"
            sx={{
              width: "80px",
              height: "80px",
              fontSize: "12px",
              // Custom styles if needed
            }}
            value="2"
          ></Radio>
          <Radio
            colorScheme="teal"
            sx={{
              width: "60px",
              height: "60px",
              fontSize: "12px",
              // Custom styles if needed
            }}
            value="3"
          ></Radio>
          <Radio
            colorScheme="teal"
            sx={{
              width: "40px",
              height: "40px",
              fontSize: "12px",
            }}
            value="4"
          ></Radio>
          <Radio
            colorScheme="teal"
            sx={{
              width: "60px",
              height: "60px",
              fontSize: "12px",
            }}
            value="5"
          ></Radio>
          <Radio
            colorScheme="teal"
            sx={{
              width: "80px",
              height: "80px",
              fontSize: "12px",
            }}
            value="6"
          ></Radio>
          <Radio
            colorScheme="teal"
            sx={{
              width: "100px",
              height: "100px",
              fontSize: "12px",
            }}
            value="7"
          ></Radio>
          <Text>Agree</Text>
        </HStack>
      </RadioGroup>

      <HStack justifyContent={"space-between"} width="85%" paddingTop="3%">
        <Button
          borderRadius="none"
          mt={4}
          bg="#7D9CB7"
          type="submit"
          textColor="white"
          height="60px"
          width="150px"
          fontSize="lg"
          font-weight="100"
        >
          BACK
        </Button>
        <Button
          borderRadius="none"
          mt={4}
          bg="#7D9CB7"
          type="submit"
          textColor="white"
          height="60px"
          width="150px"
          fontSize="lg"
          font-weight="100"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </HStack>
    </FormControl>
  );
};

export default Options;