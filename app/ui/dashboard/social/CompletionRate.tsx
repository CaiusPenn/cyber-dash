import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/dashboard/Styles.module.css";

const CompletionRate = () => {
  return (
    <Grid
      templateAreas={`"info info info info stat stat stat stat stat stat"`}
      h="full"
      gap="10"
      gridTemplateRows={"275px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(5, 1fr)"}
    >
      <GridItem area={"info"}>
        <Text className={styles.CompletionRateText}>
          Employee Training Completion Rate
        </Text>
        <Text
          padding="40px"
          textColor="#FFFFFF"
          fontWeight="100px"
          width="80%"
          opacity="70%"
        >
          The small program starts at 10.663 people and the overall conversion
          rate is 91.54%
        </Text>
      </GridItem>
      <GridItem area={"stat"}></GridItem>

      <GridItem
        area={"stat"}
        bgGradient="linear(to-b, #4585FF, #387DFF)" // Gradient background
        borderRadius={"20px"} // Softer corner radius
        width={"70%"}
        height={"80%"}
        boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.25)"} // Adjusted shadow for a deeper effect
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        border="2px solid rgba(255, 255, 255, 0.1)" // White border with transparency
        padding="20px" // General padding for content spacing
        textAlign="center" // Ensure all text is centered
        alignSelf="center" // Push the box towards the bottom of the grid
      >
        <Text fontSize="4xl" color="#FDD446" fontWeight="bold">
          91.54
        </Text>
        <Text fontSize="lg" color="#FDD446">
          points
        </Text>
        <Text fontSize="md" color="white" mt={4} textTransform="uppercase">
          Conversion Rate
        </Text>
      </GridItem>
    </Grid>
  );
};

export default CompletionRate;
