import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";

export default async function Scores(){
  return (
    <Grid
      templateAreas={`"des " 
        "info "`}
      h="full"
      gap="10"
      gridTemplateRows={"60px 240px"}
      color={"#334681"}
      fontWeight={"bold"}
    >
      <GridItem area={"des"} width="90%">
        <Stack spacing="0">
          <Flex justifyContent={"space-between"}>
            <Text className={styles.customText}>Scores for company</Text>
            <Text className={styles.customText} fontWeight={"500"}>
            </Text>
          </Flex>
          <Text className={styles.dateText}>
            2024-08-13 ~ 2024-09-13 | Last 7 days
          </Text>
        </Stack>
      </GridItem>

      <GridItem area={"info"} width="90%" paddingLeft="40px" paddingTop="30px">
        <TableContainer fontSize="12px">
          <Table variant="simple">
            <Thead background="#E8ECEF">
              <Tr>
                <Th>Domains</Th>
                <Th>Level</Th>
                <Th isNumeric>total</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>SOCIAL</Td>
                <Td>4</Td>
                <Td isNumeric>405</Td>
              </Tr>
              <Tr>
                <Td>ORGANISATIONAL</Td>
                <Td>4</Td>
                <Td isNumeric>450</Td>
              </Tr>
              <Tr>
                <Td>TECHNICAL SCORE </Td>
                <Td>3</Td>
                <Td isNumeric>391</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
    </Grid>
  );
};

