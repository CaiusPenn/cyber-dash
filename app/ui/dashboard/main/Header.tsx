import { HStack, Text, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import { cookies } from "next/headers";
import React ,{useEffect, useState} from "react";
import { GiHeartTower } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";


const Header = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const response = await fetch("/api/user_name");
      const data = await response.json();
      setUserName(data.name); 
    };

    fetchUserName();

  }, []);


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
