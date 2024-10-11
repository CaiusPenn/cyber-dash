import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import { MultipleLineGraph2 } from "@/app/ui/dashboard/main/MultipleLineGraph";


export default async function WorkloadData(){
  return (
    <Grid
      templateAreas={`"title" 
        "graph"`}
      h="full"
      gap="10"
      gridTemplateRows={"80px 430px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(1, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text className={styles.customText}>Employee Workload Data</Text>
        <Text className={styles.dateText}>
          2024-08-13 ~ 2024-09-13 | Last 7 days
        </Text>
      </GridItem>
      <GridItem area={"graph"} paddingLeft="40px">
        <MultipleLineGraph2 />
      </GridItem>
    </Grid>
  );
};

