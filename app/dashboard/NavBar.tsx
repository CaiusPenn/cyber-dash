import React from "react";
import Logo from "../../assets/1.svg";
import Link from "next/link";
import { NavLinks } from "../ui/dashboard/nav-links";
import { BsFileBarGraph } from "react-icons/bs";
import { Flex, Stack } from "@chakra-ui/react";
import { MdPeopleAlt } from "react-icons/md";
import { RiFolder6Fill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import {RxExit} from "react-icons/rx";
import { signOut } from "@/auth";
import { deleteSession } from "@/app/lib/session";
import clsx from "clsx";

const NavBar = () => {
  return (
    <Flex justifyContent="center" paddingTop="50px">
      <Stack spacing="50px" color="black">
        <Link href={"/dashboard"} ><RxDashboard size="38px" /></Link>
        <Link href={"/dashboard/social"}><MdPeopleAlt size="38px" /></Link>
        <Link href={"/dashboard/organisational"}><BsFileBarGraph size="38px" /></Link>
        <Link href={"/dashboard/technical"}><RiFolder6Fill size="38px" /></Link>
        <form
          action={async () => {
            'use server';
            deleteSession();
            await signOut();
          }}
        >
          <button>
            <div className="hidden md:block"><RxExit size="38px"/>Out</div>
          </button>
        </form>
      </Stack>
      
    </Flex>
  );
};

export default NavBar;
