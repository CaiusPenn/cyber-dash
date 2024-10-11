import { HStack, Text, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import { cookies } from "next/headers";
import React from "react";
import { GiHeartTower } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

//const name = cookies().get('name')?.value

const Header = () => {
  return (
    <Flex paddingLeft="20px" color="black" paddingRight="20px">
      <HStack>
        <GiHeartTower size="48px" />
        <Text fontSize="sm" fontWeight="bold" paddingBottom="0">
          Phishing Phighters
        </Text>
      </HStack>
      <Spacer></Spacer>
      <HStack spacing="20px">
        <RxAvatar size="48px" />
        <Text>Hello, !</Text>
      </HStack>
    </Flex>
  );
};

export default Header;
