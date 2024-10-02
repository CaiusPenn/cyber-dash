import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";

const page = () => {
  return (
    <Grid
      templateAreas={`"title title title"
                "a b c "
                "d e f "
                "g g f"`}
      h="full"
      gap="10"
      width="98%"
      gridTemplateRows={"35px 125px 250px 400px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="0px"
          paddingTop="20px"
        >
          Organisational Domain Page
        </Text>
      </GridItem>
      <GridItem area={"a"} className={styles.statsBox}></GridItem>
      <GridItem area={"b"} className={styles.statsBox}></GridItem>
      <GridItem area={"c"} className={styles.statsBox}></GridItem>
      <GridItem area={"d"} className={styles.statsBox}></GridItem>
      <GridItem area={"e"} className={styles.statsBox}></GridItem>
      <GridItem area={"f"} className={styles.statsBox}></GridItem>
      <GridItem area={"g"} className={styles.statsBox}></GridItem>
    </Grid>
  );
};

export default page;
