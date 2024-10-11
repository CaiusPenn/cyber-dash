"use client";
import React from "react";
import LoginForm from '@/app/ui/login-form';
import {
  Grid,
  GridItem,
  Stack,

} from "@chakra-ui/react";
export default function Page (){
  
  return (
    <Grid
      h="100vh"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={4} colSpan={1} bg="#1C61FF"></GridItem>
      <GridItem rowSpan={4} colSpan={1} bg="#FFFFFF">
        <Stack paddingTop={200} spacing="0">
          <LoginForm/>
        </Stack>
      </GridItem>
    </Grid>
  );
};
