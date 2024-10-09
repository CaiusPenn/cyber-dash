import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import { DoughnutCustom } from "../main/DoughnutCustom";
import { DistributionDoughnut } from "./DistributionDoughnut";

const GroupDistributions = () => {
  return (
    <Grid
      templateAreas={`"des"
        "stats"`}
      bg="#FFFFFF"
      height={"full"}
      gridTemplateRows={"10% 90%"}
      gridTemplateColumns={"repeat(1, 1fr)"}
    >
      <GridItem area="des">
        <Text className={styles.customText}>Open Group Distribution</Text>
        <Text className={styles.dateText}>
          2024-08-13 ~ 2024-09-13 | Last 7 days
          {/* Look at main_dashboard scores file  */}
        </Text>
      </GridItem>
      <GridItem
        area="stats"
        width="120%"
        height="120%"
        paddingLeft={"10%"}
        paddingTop={"10%"}
      >
        <DistributionDoughnut />
      </GridItem>
    </Grid>
  );
};

export default GroupDistributions;
