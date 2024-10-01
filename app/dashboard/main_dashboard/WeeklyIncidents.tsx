import { Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";
import { MultipleLineGraph } from "./MultipleLineGraph";

const WeeklyIncidents = () => {
  return (
    <Grid
      templateAreas={`"des " 
      "info "`}
      h="full"
      gap="10"
      gridTemplateRows={"60px 300px"}
      color={"#334681"}
      fontWeight={"bold"}
    >
      <GridItem area={"des"} width="90%">
        <Stack spacing="0">
          <Flex justifyContent={"space-between"}>
            <Text className={styles.customText}>Incidents per week</Text>
            <Text className={styles.customText} fontWeight={"500"}>
              total
            </Text>
          </Flex>
          <Text className={styles.dateText}>
            2024-08-13 ~ 2024-09-13 | Last 7 days
          </Text>
        </Stack>
      </GridItem>

      <GridItem area={"info"} paddingLeft="40px">
        <MultipleLineGraph />
      </GridItem>
    </Grid>
  );
};

export default WeeklyIncidents;
