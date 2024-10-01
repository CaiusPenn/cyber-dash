"use client";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";
import CompletionRate from "./CompletionRate";
import PhishingResults from "./PhishingResults";

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
        <Text className={styles.customText}>Employee Workload Data</Text>
      </GridItem>
      <GridItem area={"stress"} className={styles.customBox} width="95%">
        <Text className={styles.customText}>Employee Stress Chart</Text>
        <Text className={styles.dateText}>
          2024-08-13 ~ 2024-09-13 | Last 7 days{" "}
        </Text>
        {/* <Flex justifyContent="center" alignContent="center" paddingTop="80px"> */}
        {/* <Doughnut h={225} w={225} /> */}
        {/* </Flex> */}
      </GridItem>
    </Grid>
  );
};

export default page;
