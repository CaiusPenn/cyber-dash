import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import { MultiLineChart2 } from "@/app/ui/dashboard/main/MultipleLineGraph";


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
      </GridItem>
      <GridItem area={"graph"} paddingLeft="40px">
        <MultiLineChart2 title="" />
      </GridItem>
    </Grid>
  );
};

