"use client";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/dashboard/Styles.module.css";
import CompletionRate from "./CompletionRate";
import PhishingResults from "./PhishingResults";
import WorkloadData from "./WorkloadData";
import Stress from "./Stress";

const page = () => {
  return (
    <Grid
      templateAreas={`"title title title title title "
                  "info info info phishing phishing"
                  "workload workload workload stress stress"`}
      h="full"
      gap="10"
      gridTemplateRows={"25px 275px 600px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(5, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="12px"
          paddingTop="20px"
        >
          Social Domain Page
        </Text>
      </GridItem>

      <GridItem area={"info"} className={styles.customBox} bg="#387DFF">
        <CompletionRate />
      </GridItem>
      <GridItem area={"phishing"} className={styles.customBox} width="95%">
        <PhishingResults />
      </GridItem>
      <GridItem area={"workload"} className={styles.customBox}>
        <WorkloadData />
      </GridItem>
      <GridItem area={"stress"} className={styles.customBox} width="95%">
        <Stress />
      </GridItem>
    </Grid>
  );
};

export default page;
