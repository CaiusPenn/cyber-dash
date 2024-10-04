import { HStack, Text, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import React from "react";
// import logo from "../../assets/logo.png"; // Correctly import the logo
import { GiHeartTower } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import OverviewIcon from "./overviewIcon";

const Header = () => {
  return (
    <Flex paddingLeft="20px" color="black" paddingRight="20px">
      <HStack spacing="60px">
        <GiHeartTower size="48px" color="#387DFF" />
        <Text
          fontSize="18px"
          fontWeight="500"
          paddingBottom="0"
          color={"#334681"}
        >
          Phishing Phighters
        </Text>
      </HStack>
      <Spacer></Spacer>
      <HStack spacing="20px">
        <Text>Hello, {"Name"}</Text>
        <IoMdNotifications size="24px" color="#334681" />
      </HStack>
    </Flex>
  );
};

export default Header;
