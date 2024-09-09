import React from "react";
import { HStack, Select, Stack, Text } from "@chakra-ui/react";

const Overview = () => {
  return (
    <>
      <Stack spacing={1} padding={5}>
        <Text fontSize="5xl" fontWeight={800}>
          Welcome, Organisation!
        </Text>
        <Text fontSize="2xl" paddingLeft={3}>
          Here is an overview of your security performance
        </Text>
      </Stack>

      <HStack paddingTop={10} paddingLeft={3}>
        <Select placeholder="Date Range" size="lg" maxWidth={300} />
        <Select placeholder="Category" size="lg" maxWidth={300} />
      </HStack>
    </>
  );
};

export default Overview;
