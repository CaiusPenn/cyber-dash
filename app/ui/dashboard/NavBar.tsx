import React from "react";
import Link from "next/link";
import { Flex, Stack } from "@chakra-ui/react";
import { BsFileBarGraph } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { RiFolder6Fill } from "react-icons/ri";
import { RxDashboard,RxExit } from "react-icons/rx";
import { signOut } from "@/auth";
import { deleteSession } from "@/app/lib/session";
import { headers } from "next/headers";
import clsx from "clsx";

import { IconContext } from "react-icons";



const NavBar = () => {
  return (
    <Flex justifyContent="center" paddingTop="50px">
      <Stack spacing="50px">
        <Link href={"/dashboard"} ><RxDashboard size="38px"/></Link>
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
          <button className='text-opacity-0 text-transparent pt-20px'>
            <div className="hidden md:block text-transparent"><RxExit size="38px"/>OUT</div>
          </button>
        </form>
      </Stack>
      
    </Flex>
  );
};

export default NavBar;
