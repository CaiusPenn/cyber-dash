import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import Overview from "./overview"; // Corrected import
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
    </Grid>
  );
};

export default Manager;
