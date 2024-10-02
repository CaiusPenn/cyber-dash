import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";

const PolicyViolations = () => {
  return (
    <Grid
      templateAreas={`"des"
        "table"`}
      bg="#FFFFFF"
      gridTemplateColumns={"repeat(1, 1fr)"}
    >
      <GridItem>
        <Text className={styles.customText}>Reported Policy Violations</Text>
        <Text className={styles.dateText}>
          2024-08-13 ~ 2024-09-13 | Last 7 days
          {/* Look at main_dashboard scores file  */}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default PolicyViolations;
