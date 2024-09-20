import { Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles.module.css";

const Page = () => {
  return (
    <Grid
      templateAreas={`"overview overview overview"
                      "info info info"
                      "incidents threats maturity"
                      "scores week week"`}
      h="full"
      gap="10"
      gridTemplateRows={"100px 20px 1fr 2fr "}
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
        <Text>Views Overview</Text>
      </GridItem>

      <GridItem area={"info"} width={"98%"}>
        <Flex justify={"space-between"}>
          <Text> Program Traffic Tracking </Text>
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
        <Text className={styles.customText}>Cyber Security Incidents</Text>
      </GridItem>

      <GridItem area={"threats"} bg="#FFFFFF" borderRadius="15px">
        <Text className={styles.customText}>Threats Detected</Text>
      </GridItem>

      <GridItem area={"maturity"} bg="#FFFFFF" borderRadius="15px" width="95%">
        <Text className={styles.customText}>Current Maturity Level</Text>
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
