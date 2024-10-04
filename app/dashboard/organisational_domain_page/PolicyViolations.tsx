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
import React from "react";
import styles from "../Styles.module.css";

const PolicyViolations = () => {
  const data = [
    { domain: "SOCIAL", level: 4, total: 405 },
    { domain: "ORGANISATIONAL", level: 4, total: 450 },
    { domain: "TECHNICAL SCORE", level: 3, total: 391 },
    { domain: "AAA", level: 3, total: 391 },
    { domain: "BBB", level: 3, total: 391 },
    // Add more data objects as needed
  ];
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
          2024-08-13 ~ 2024-09-13 | Last 7 days
          {/* Look at main_dashboard scores file  */}
        </Text>
      </GridItem>

      <GridItem area="table" width="90%" paddingLeft="5%">
        <TableContainer fontSize="12px">
          <Table variant="simple">
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td textColor="#334681">{item.domain} </Td>
                  <Td textColor="#334681" fontWeight={"400"}>
                    {item.level}
                  </Td>
                  <Td textColor="#3E7EF5" isNumeric>
                    {item.total}
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

export default PolicyViolations;
