"use client";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";
import LittleStats from "./LittleStats";
import PolicyViolations from "./PolicyViolations";
import GroupDistributions from "./GroupDistributions";
import SmallStats from "../main_dashboard/SmallStats";
import { LineGraph } from "../LineGraph";
import TrainingEffectiveness from "./TrainingEffectiveness";

const page = () => {
  return (
    <Grid
      templateAreas={`"title title title"
                "a b c "
                "d e f "
                "g g f"`}
      h="full"
      gap="10"
      width="98%"
      gridTemplateRows={"35px 125px 300px 400px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="0px"
          paddingTop="20px"
        >
          Organisational Domain Page
        </Text>
      </GridItem>
      <GridItem area={"a"} className={styles.statsBox}>
        <LittleStats
          stats="432"
          des="Number of participation"
          colour="#387DFF"
        ></LittleStats>
      </GridItem>
      <GridItem area={"b"} className={styles.statsBox}>
        <LittleStats
          stats="77  High Awareness"
          des="Overall Security Culture Awareness Score"
          colour="#6DD230"
        ></LittleStats>
      </GridItem>
      <GridItem area={"c"} className={styles.statsBox}>
        <LittleStats
          stats="$671,93,432"
          des="Investment into cyber"
          colour="#FE7C4B"
        ></LittleStats>
      </GridItem>
      <GridItem area={"d"} className={styles.statsBox}>
        <GroupDistributions />
      </GridItem>
      <GridItem area={"e"} className={styles.statsBox}>
        <SmallStats
          graph={
            <LineGraph
              color="#6DD230"
              grad={["#B6E998", "#DBF4CB", "#FFFFFF"]}
            />
          }
          stats="32"
          title="Number of Outdated Policies"
          color="#6DD230"
        />
      </GridItem>
      <GridItem area={"f"} className={styles.statsBox}>
        <PolicyViolations />
      </GridItem>
      <GridItem area={"g"} className={styles.statsBox}>
        <TrainingEffectiveness />
      </GridItem>
    </Grid>
  );
};

export default page;
