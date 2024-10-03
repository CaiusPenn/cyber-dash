import { Grid, GridItem, Stack, HStack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";
import { Gi3dGlasses } from "react-icons/gi";

interface Props {
  stats: string;
  title: string;
  icon: string;
  color: string;
}

const Stats = ({ stats, title, icon, color }: Props) => {
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
          {stats}
        </Text>
      </GridItem>

      <GridItem area={"info"}>
        <HStack>
          <Text className={styles.dateText}> Ring ratio </Text>
          <Text className={styles.dateText}> Year on year </Text>
        </HStack>
      </GridItem>

      <GridItem area="icon" paddingTop={"100%"} paddingLeft={"100%"}>
        <Gi3dGlasses fontSize={35} />
      </GridItem>
    </Grid>
  );
};

export default Stats;
