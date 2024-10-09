import {
  Grid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { fetchPolicy } from "@/app/lib/data";
import React from "react";
import styles from "@/app/Styles.module.css";

export default async function PolicyViolations(){
  const data = await fetchPolicy();
  return (
    <Grid
      templateAreas={`"des"
        "table"`}
      bg="#FFFFFF"
      gridTemplateColumns={"repeat(1, 1fr)"}
      gridTemplateRows={"120px 400px"}
    >
      <GridItem>
        <Text className={styles.customText}>Reported Policy Violations</Text>
        <Text className={styles.dateText}>
          {data[0].date.toLocaleDateString()} ~ {data[data.length-1].date.toLocaleDateString()} 
        </Text>
      </GridItem>

      <GridItem area="table" width="90%" paddingLeft="5%">
        <TableContainer fontSize="12px">
          <Table variant="simple">
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td textColor="#334681">{item.id} </Td>
                  <Td textColor="#334681" fontWeight={"400"}>
                    {item.date.toDateString()}
                  </Td>
                  <Td textColor="#3E7EF5" isNumeric>
                    {item.violations}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </GridItem>
    </Grid>
  );
};
