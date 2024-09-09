import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import Overview from "./overview"; // Corrected import
import { signOut } from '@/auth';

const Manager = () => {
  return (
    <Grid
      h="3000px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(14, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={4} colSpan={1} bg="tomato"></GridItem>

      <GridItem rowSpan={1} colSpan={13} bg="papayawhip">
        <Overview></Overview>
      </GridItem>

      <GridItem rowSpan={1} colSpan={13} bg="papayawhip" />
      <GridItem rowSpan={1} colSpan={13} bg="papayawhip" />
      <GridItem rowSpan={1} colSpan={13} bg="papayawhip" />

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

    </Grid>
  );
};

export default Manager;
