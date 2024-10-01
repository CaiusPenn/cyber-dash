"use client";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";

const page = () => {
  return (
    <Grid
      templateAreas={`"title title title"
                  "one one one "
                  "two two two "
                  "three three three "
                  "four four four"`}
      h="full"
      gap="10"
      gridTemplateRows={"25px 300px 300px 200px 300px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="12px"
          paddingTop="20px"
        >
          Patch Application
        </Text>
      </GridItem>
    </Grid>
  );
};

export default page;
