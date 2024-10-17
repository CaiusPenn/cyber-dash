'use client'
import { HStack, Text, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { IoFish } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";



const Header = () => {

  const [userName, setUserName] = useState<string | null>(null); // State to store user's name

  useEffect(() => {
    const fetchUserName = async () => {
      const response = await fetch("/api/user_name");
      const data = await response.json();
      setUserName(data.name); // Update the state with the fetched user name
    };

    fetchUserName(); 
  }, []);

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
        <Text>Hello, {userName}!</Text>
      </HStack>
    </Flex>
  );
};

export default Header;
