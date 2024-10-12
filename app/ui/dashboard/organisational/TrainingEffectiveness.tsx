import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import { MultipleLineGraph } from "@/app/ui/dashboard/main/MultipleLineGraph";

const TrainingEffectiveness = () => {
  return (
    <Grid
      templateAreas={`"des"
        "stats"`}
      bg="#FFFFFF"
      gridTemplateColumns={"repeat(1, 1fr)"}
      gridTemplateRows={"auto 1fr"} // Auto height for text, remaining space for graph
    >
       <GridItem 
        area="des" 
        padding={0} // Ensure no padding
        margin={0} // Ensure no margin
        alignSelf="start" // Align the text at the top
      >
        <Text className={styles.customText}>
          Cyber Security Training Effectiveness
        </Text>
        <Text className={styles.dateText}>
          2024-08-13 ~ 2024-09-13 | Last 7 days
        </Text>
      </GridItem>

      <GridItem area="stats">
        <MultipleLineGraph />
      </GridItem>
    </Grid>
  );
};

export default TrainingEffectiveness;
