import React from "react";
import Layout from "./layout";
import {
  Grid,
  GridItem,
  Stack,
  Text,
  Progress,
  Center,
  Flex,
  HStack,
} from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import Options from "./options";

const Page = () => {
  return (
    <Stack mt="10" spacing="10">
      <Flex justifyContent="center" alignContent="center">
        <ProgressBar />
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Text textColor="#4F6D7A" fontSize="2xl">
          Question 23:
        </Text>
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Text fontSize="2xl" width="60%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Flex>
      <Options />
    </Stack>
  );
};

export default Page;
