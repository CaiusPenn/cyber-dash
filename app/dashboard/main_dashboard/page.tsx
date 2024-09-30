"use client";
import { Flex, Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";
import { LineGraph } from "../LineGraph";
import SmallStats from "./SmallStats";

const Page = () => {
  return (
    <Grid
      templateAreas={`"overview overview overview"
                      "info info info"
                      "incidents threats maturity"
                      "scores week week"`}
      h="full"
      gap="30"
      gridTemplateRows={"150px 20px 242px 500px "}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
    >
      <GridItem
        area={"overview"}
        bg="#387DFF"
        boxShadow="md"
        padding="0"
        margin="0"
        borderRadius={"10px"}
        width={"98%"}
      >
        <Text color={"#FFFFFF"} padding="24px" fontSize={"20px"}>
          Views Overview
        </Text>
      </GridItem>

      <GridItem area={"info"} width={"98%"}>
        <Flex justify={"space-between"}>
          <Text fontSize="20px"> Program Traffic Tracking </Text>
          <HStack>
            <Text> Refresh </Text>
            <Text> Refresh Icon </Text>
          </HStack>
        </Flex>
      </GridItem>

      <GridItem
        area={"incidents"}
        bg="#FFFFFF"
        borderRadius="15px"
        paddingLeft="100x"
      >
        <SmallStats
          stats="32,021"
          graph={
            <LineGraph
              color="#387DFF"
              grad={["#A7C5FF", "#D3E2FF", "#FFFFFF"]}
            />
          }
          title="Cyber Security Incidents"
          color="#387DFF"
        />
      </GridItem>

      <GridItem area={"threats"} bg="#FFFFFF" borderRadius="15px">
        <SmallStats
          stats="429"
          graph={
            <LineGraph
              color="#6DD230"
              grad={["#B6E998", "#DBF4CB", "#FFFFFF"]}
            />
          }
          title="Threats Detected"
          color="#6DD230"
        />
      </GridItem>

      <GridItem area={"maturity"} bg="#FFFFFF" borderRadius="15px" width="95%">
        <SmallStats
          stats="Level 4"
          graph={
            <LineGraph
              color="#FE7C4B"
              grad={["#FFBEA5", "#FFDED2", "#FFFFFF"]}
            />
          }
          title="Current Maturity Level"
          color="#FE7C4B"
        />
      </GridItem>

      <GridItem area={"scores"} bg="#FFFFFF" borderRadius="15px" height="90%">
        <Text className={styles.customText}>Scores for company</Text>
      </GridItem>

      <GridItem
        area={"week"}
        bg="#FFFFFF"
        borderRadius="15px"
        width="98%"
        height="90%"
      >
        <Text className={styles.customText}>Incidents per week</Text>
      </GridItem>
    </Grid>
  );
};

export default Page;
