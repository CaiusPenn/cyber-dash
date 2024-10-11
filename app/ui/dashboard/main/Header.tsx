import { HStack, Text, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import { cookies } from "next/headers";
import React from "react";
import { IoFish } from "react-icons/io5";

import { RxAvatar } from "react-icons/rx";

const name = cookies().get('name')?.value

const Header = () => {
  return (
    <Flex paddingLeft="20px" color="black" paddingRight="20px">
      <HStack>
        <IoFish size="48px" />
        <Text fontSize="md" fontWeight="bold" paddingLeft='20px' paddingBottom="0">
          Phishing Phighters
        </Text>
      </HStack>
      <Spacer></Spacer>
      <HStack spacing="20px">
        <RxAvatar size="48px" />
        <Text>Hello, {name}!</Text>
      </HStack>
    </Flex>
  );
};

export default Header;
