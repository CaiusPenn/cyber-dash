import React from "react";
import Logo from "../../assets/1.svg";
import { BsFileBarGraph } from "react-icons/bs";
import { Stack } from "@chakra-ui/react";
import { MdPeopleAlt } from "react-icons/md";
import { RiFolder6Fill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const NavBar = () => {
  return (
    <Stack
      spacing="50px"
      justifyContent="center"
      paddingLeft="20px"
      color="black"
    >
      <RxDashboard size="48px" />

      <MdPeopleAlt size="48px" />
      <BsFileBarGraph size="48px" />
      <RiFolder6Fill size="48px" />
    </Stack>
  );
};

export default NavBar;
