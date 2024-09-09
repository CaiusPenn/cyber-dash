import React from "react";
import { HStack, Select, Stack, Text } from "@chakra-ui/react";
import { signOut } from '@/auth';

const Overview = () => {
  return (
    <>
      <Stack spacing={1} padding={5}>
        <Text fontSize="5xl" fontWeight={800}>
          Welcome, Organisation!
        </Text>
        <Text fontSize="2xl" paddingLeft={3}>
          Here is an overview of your security performance
        </Text>
      </Stack>

      <HStack paddingTop={10} paddingLeft={3}>
        <Select placeholder="Date Range" size="lg" maxWidth={300} />
        <Select placeholder="Category" size="lg" maxWidth={300} />
      </HStack>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
    </>
  );
};

export default Overview;

