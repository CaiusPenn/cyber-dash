import { HStack, Text, Image } from "@chakra-ui/react";
import React from "react";
// import logo from "../../assets/logo.png"; // Correctly import the logo
import { GiHeartTower } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <HStack spacing={4} alignItems="center" paddingLeft="20px" color="black">
      <HStack>
        <GiHeartTower size="48px" />
        <Text fontSize="sm" fontWeight="bold" paddingBottom="0">
          Phishing Phighters
        </Text>
      </HStack>

      <IoMdNotifications />
    </HStack>
  );
};

export default Header;
