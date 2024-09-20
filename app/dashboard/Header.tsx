import { HStack, Text, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import React from "react";
// import logo from "../../assets/logo.png"; // Correctly import the logo
import { GiHeartTower } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";

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
        <IoMdNotifications size="48px" />
        <Text>Hello, Name</Text>
        <IoMdNotifications size="48px" />
      </HStack>
    </Flex>
  );
};

export default Header;
