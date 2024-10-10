import React from "react";
import {
  Box,
  Progress,
  Text,
  Flex,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import styles from "@/app/Styles.module.css";
import Numbers from "./Numbers";
import { colorSchema } from "@/app/ui/dashboard/main/ColorScheme";

const PhishingResults = () => {
  return (
    <Grid
      templateAreas={` "title"
        "reported "
                  "un-reported"
                  "failed"`}
      h="full"
      gap="10"
      gridTemplateRows={"80px 5px 5px 5px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(1, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text className={styles.customText}>Phishing Simulation Results</Text>
        <Text className={styles.dateText}>
          2024-08-13 ~ 2024-09-13 | Last 7 days
        </Text>
      </GridItem>

      <GridItem area={"reported"} width={"90%"} paddingLeft={"7%"}>
        <Numbers
          num="1"
          label="Reported"
          val={91.54}
          colour={"#FE7C4B"}
        ></Numbers>
      </GridItem>

      <GridItem area={"un-reported"} width={"90%"} paddingLeft={"7%"}>
        <Numbers
          num="2"
          label="Un-reported"
          val={40.63}
          colour={"#23B899"}
        />
      </GridItem>

      <GridItem area={"failed"} width={"90%"} paddingLeft={"7%"}>
        <Numbers num="3" label="Failed" val={14.68} colour={"#FE7C4B"} />
      </GridItem>
    </Grid>
  );
};

export default PhishingResults;
