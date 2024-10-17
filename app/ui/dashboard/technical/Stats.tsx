import { Grid, GridItem, Stack, HStack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import { Gi3dGlasses } from "react-icons/gi";

interface Props {
  stats: Number | string;
  title: string;
  color: string;
}

interface Props2 {
  stats: Number | string;
  title: string;
  graph: any;
  desc: string;
  tSize?: string; // Optional prop for text size
  tColor?: string;
  paddingT?: string,
  h?: string,
  w?: string,
}

const GraphStats = ({
  stats,
  title,
  graph,
  desc,
  tSize = "150%",
  tColor = "#334681",
  paddingT = "1",
  h="100%",
  w="120%",
}: Props2) => {
  return (
    <Grid
      templateAreas={`"des des des des des"
      "stat stat graph graph graph"
      "stat stat graph graph graph"
      "info info info info info"`}
      h="full"
      gap="7"
      gridTemplateRows={"25px 40px 1fr 40px"} // Adjust row heights
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(6, 1fr)"}
      boxShadow={"md"}
    >
      <GridItem area={"des"}>
        <Text className={styles.customText}>{title}</Text>
      </GridItem>
      <GridItem area={"stat"}>
        <Text
          fontSize={tSize}
          paddingLeft="15%"
          paddingRight={0}
          textColor={tColor}
        >
          {String(stats)}
        </Text>
      </GridItem>
      <GridItem area={"graph"} padding={paddingT} height={h} width={w}>
        {graph}
      </GridItem>
      <GridItem area={"info"}>
        <Text className={styles.dateText}>{desc}</Text>
      </GridItem>
    </Grid>
  );
};
const GaugeStats = ({ stats, title, graph, desc }: Props2) => {
  return (
    <Grid
      templateAreas={`"des des des des des des"
      "stat stat graph graph graph graph"
      "stat stat graph graph graph graph"
      "info info info info info info"`}
      h="full"
      gap="7"
      gridTemplateRows={"40px 40px 35px 20px"} // Adjust row heights
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(6, 1fr)"}
      boxShadow={"md"}
    >
      <GridItem area={"des"}>
        <Text className={styles.customText}>{title}</Text>
      </GridItem>
      <GridItem area={"stat"}>
        <Text fontSize={"150%"} paddingLeft="22%" paddingRight={0}>
          {String(stats)}
        </Text>
      </GridItem>
      <GridItem area={"graph"} padding={0} height="150%" width="150%">
        {graph}
      </GridItem>
      <GridItem area={"info"}>
        <Text className={styles.dateText}>{desc}</Text>
      </GridItem>
    </Grid>
  );
};

const StressStats = ({ stats, title, graph, desc }: Props2) => {
  return (
    <Grid
      templateAreas={`"des"
        "graph"`}
      h="full"
      gap="7"
      gridTemplateRows={"60px 100px"} // Adjust row heights
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(1, 1fr)"}
      boxShadow={"md"}
    >
      <GridItem area={"des"}>
        <Text className={styles.customText}>{title}</Text>
      </GridItem>

      <GridItem
        area={"graph"}
        // paddingTop="15"
        height="70%"
        width="70%"
        paddingLeft="30%"
      >
        {graph}
      </GridItem>
    </Grid>
  );
};

const Stats = ({ stats, title, color }: Props) => {
  return (
    <Grid
      templateAreas={`"des des des des icon"
      "stat stat stat stat icon "
      "info info info info info"`}
      h="full"
      gap="7"
      gridTemplateRows={"40px 40px 40px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(6, 1fr)"}
      boxShadow={"md"}
    >
      <GridItem area={"des"}>
        <Text className={styles.customText}>{title}</Text>
      </GridItem>

      <GridItem area={"stat"}>
        <Text className={styles.viewsOverviewStat} color={color}>
          {String(stats)}
        </Text>
      </GridItem>

      <GridItem area={"info"}>
        <HStack></HStack>
      </GridItem>

      <GridItem area="icon" paddingTop={"100%"} paddingLeft={"100%"}>
        <Gi3dGlasses fontSize={35} />
      </GridItem>
    </Grid>
  );
};

const TechnicalStats = ({ stats, title, graph, desc }: Props2) => {
  return (
    <Grid
      templateAreas={`"des des des des des"
      "stat stat graph graph graph"
      "stat stat graph graph graph"
      "info info info info info"`}
      h="full"
      gap="7"
      gridTemplateRows={"40px 40px 1fr 40px"} // Adjust row heights
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(6, 1fr)"}
      boxShadow={"md"}
    >
      <GridItem area={"des"}>
        <Text className={styles.customText}>{title}</Text>
      </GridItem>
      <GridItem area={"stat"}>
        <Text className={styles.viewsOverviewStat}>{String(stats)}</Text>
      </GridItem>
      <GridItem area={"graph"} height="50%">
        {graph}
      </GridItem>
      <GridItem area={"info"}>
        <Text className={styles.dateText}>{desc}</Text>
      </GridItem>
    </Grid>
  );
};

const CategoryStats = ({ stats, title, graph, desc }: Props2) => {
  return (
    <Grid
      templateAreas={`"des des des des des"
      "graph graph graph graph graph"
      "graph graph graph graph graph"
      "info info info info info"`}
      h="full"
      gap="7"
      gridTemplateRows={"40px 40px 40px 40px"} // Adjust row heights
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(6, 1fr)"}
      boxShadow={"md"}
    >
      <GridItem area={"des"}>
        <Stack spacing={"0"}>
          <Text className={styles.customText}>{title}</Text>
        </Stack>
      </GridItem>
      <GridItem area={"stat"}>
        <Text fontSize={"16px"}>{String(stats)}</Text>
      </GridItem>
      <GridItem area={"graph"} height="95%" width="95%" paddingLeft="40%">
        {graph}
      </GridItem>

      <GridItem area="info" paddingTop="75px">
        <Text fontSize="12px" paddingLeft="15px" textColor={"#8590B3"}>
          {desc}
        </Text>
      </GridItem>
    </Grid>
  );
};

export {
  Stats,
  GraphStats,
  StressStats,
  TechnicalStats,
  CategoryStats,
  GaugeStats,
};
