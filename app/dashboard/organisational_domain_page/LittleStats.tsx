import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Gi3dGlasses } from "react-icons/gi";

interface Props {
  stats: string;
  des: string;
  colour: string;
}

const LittleStats = ({ stats, des, colour }: Props) => {
  return (
    <Grid
      templateAreas={`"icon icon info info info info info"`}
      bg="#FFFFFF"
      gridTemplateColumns={"repeat(7, 1fr)"}
    >
      <GridItem area="icon" paddingLeft={"30%"} paddingTop={"30%"}>
        <Gi3dGlasses fontSize={35} />
      </GridItem>
      <GridItem area="info" paddingTop={"10%"}>
        <Stack>
          <Text color={colour} fontSize={"26px"}>
            {stats}
          </Text>
          <Text fontSize={"12px"} fontWeight={"400"}>
            {des}
          </Text>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default LittleStats;
