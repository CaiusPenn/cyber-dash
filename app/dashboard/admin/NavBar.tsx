import React from "react";
import Logo from "../../assets/1.svg";
import { BsFileBarGraph } from "react-icons/bs";
import { Flex, Stack } from "@chakra-ui/react";
import { MdPeopleAlt } from "react-icons/md";
import { RiFolder6Fill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const NavBar = () => {
  return (
    <Flex justifyContent="center" paddingTop="50px">
      <Stack spacing="50px" color="black">
        <RxDashboard size="38px" />
        <MdPeopleAlt size="38px" />
        <BsFileBarGraph size="38px" />
        <RiFolder6Fill size="38px" />
      </Stack>
    </Flex>
  );
};

export default NavBar;
