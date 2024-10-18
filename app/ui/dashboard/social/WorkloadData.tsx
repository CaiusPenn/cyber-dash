import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import { MultiLineChart2 } from "@/app/ui/dashboard/main/MultipleLineGraph";


export default async function WorkloadData(){
  return (
    <Grid
      templateAreas={`"title" 
        "graph"
        "info"`}
      h="full"
      gap="10"
      gridTemplateRows={"auto 1fr 120px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(1, 1fr)"}
      width={"95%"}
    >
      <GridItem area={"title"}
        padding={0} // Ensure no padding
        margin={0} // Ensure no margin
        alignSelf="start" // Align the text at the top
        >
        <Text className={styles.customText}>Employee Workload Data</Text>
      </GridItem>
      <GridItem area={"graph"} width={"96%"} padding={'10px'}>
        <MultiLineChart2 title="" />
      </GridItem>
      <GridItem area={"info"}>
        <Text className={styles.dateText}>{""}</Text>
      </GridItem>
    </Grid>
  );
};

