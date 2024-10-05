import { Box, Flex, Progress, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";

interface Props {
  num: string;
  label: string;
  val: number;
  colour: string;
}

const Numbers = ({ num, label, val, colour }: Props) => {
  console.log(colour); // Debugging: Check the value of colour
  return (
    <Stack spacing="1">
      <Flex align="center">
        <Box display="flex" alignItems="center" mr="4">
          <Box
            bg="#E8ECEF"
            width="15px"
            height="15px"
            borderRadius="20%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text className={styles.simulationResultsText}>{num}</Text>
          </Box>
        </Box>
        <Text className={styles.simulationResultsText}>{label}</Text>
        <Spacer />
        <Text className={styles.simulationResultsText}>{val}%</Text>
      </Flex>
      <Progress
        value={val}
        height="8px"
        borderRadius="4px"
        sx={{
          "& .chakra-progress__filled": {
            bg: colour, // Custom filled color
          },
        }}
      />
    </Stack>
  );
};

export default Numbers;
