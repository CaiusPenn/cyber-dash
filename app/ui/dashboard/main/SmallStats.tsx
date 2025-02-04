import { Grid, GridItem, Stack, HStack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";

interface Props {
  graph: React.ReactNode;
  stats: string;
  title: string;
  color: string;
}

const SmallStats = ({ graph, stats, title, color }: Props) => {
  return (
    <Grid
      templateAreas={`"des des des"
      "stat graph graph "`}
      h="full"
      gap="5"
      gridTemplateRows={"15% 85%"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
      boxShadow={"md"}
    >
      <GridItem area={"des"}>
        <Stack spacing="0">
          <Text className={styles.customText}>{title}</Text>
          <HStack>
            <Text className={styles.dateText}> Ring ratio </Text>
            <Text className={styles.dateText}> Year on year </Text>
          </HStack>
        </Stack>
      </GridItem>

      <GridItem area={"stat"} paddingTop={"25px"} colSpan={1}>
        <Stack spacing="2">
          <Text className={styles.viewsOverviewToday}> today </Text>
          <Text className={styles.viewsOverviewStat} color={color}>
            {stats}
          </Text>
        </Stack>
      </GridItem>

      <GridItem area={"graph"} paddingLeft="20px" paddingTop="10px">
        {graph}
      </GridItem>
    </Grid>
  );
};

export default SmallStats;
