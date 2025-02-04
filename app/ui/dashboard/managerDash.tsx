import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "@/app/Styles.module.css";
import {
  Stats,
  GraphStats,
  GaugeStats,
} from "@/app/ui/dashboard/technical/Stats";
import Scores from "@/app/ui/dashboard/main/Scores";
import {
  fetchLatestIncidents,
  fetchIncidentsSeverity,
  IncidentsbyDate,
} from "@/app/lib/data";
import {
  IncidentChart,
  IncidentSeverityChart,
  IncidentCountChart,
  GaugeChart,
} from "@/app/ui/dashboard/chart";
import "@/global.css";

export default async function managerDash() {
  const incidents = await fetchLatestIncidents();
  const incidentSeverity = await fetchIncidentsSeverity();
  const incidentsCount = await IncidentsbyDate();
  const maturityLevel = 1;
  return (
    <Grid
      templateAreas={`"overview overview overview"
                        "info info info"
                        "incidents threats maturity"
                        "scores week week"`}
      h="full"
      gap="25"
      gridTemplateRows={"150px 20px 240px 500px "}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
    >
      <GridItem
        area={"overview"}
        bg="#387DFF"
        boxShadow="md"
        padding="0"
        margin="0"
        borderRadius={"10px"}
        width={"98%"}
      >
        <Text
          color={"#FFFFFF"}
          padding="50px"
          fontSize={"32px"}
          fontWeight={"800"}
        >
          Overview
        </Text>
      </GridItem>

      <GridItem area={"info"} width={"98%"}>
        <Flex justify={"space-between"}>
          <Text fontSize="20px"> Program Traffic Tracking </Text>
          <HStack></HStack>
        </Flex>
      </GridItem>

      <GridItem area={"incidents"} bg="#FFFFFF" borderRadius="15px" width={"95%"}>
        <GraphStats
          stats={incidents[0].severity}
          title="Severity of Latest Incident"
          desc="Severity of Incidents Over Time"
          graph={<IncidentChart value={incidents} title="" 
          />}
        />
      </GridItem>

      <GridItem
        area={"threats"}
        bg="#FFFFFF"
        borderRadius="15px"
        width="95%"
        paddingLeft="100x"
      >
        <GraphStats
          stats={incidents.length}
          title="Number of Incidents"
          desc="Number of Incidents Over Time"
          graph={<IncidentCountChart value={incidentsCount} title="" />}
        />
      </GridItem>

      <GridItem
        area={"maturity"}
        bg="#FFFFFF"
        borderRadius="15px"
        width="95%"
        paddingLeft="100x"
      >
        <GaugeStats
          stats={maturityLevel}
          title="Current Maturity Level"
          desc="Maturity Level for your Organisation"
          graph={<GaugeChart value={maturityLevel + 1} gValue={4} />}
        />
      </GridItem>

      <GridItem area={"scores"} bg="#FFFFFF" borderRadius="15px" height="90%">
        <Scores />
      </GridItem>

      <GridItem
        area={"week"}
        bg="#FFFFFF"
        borderRadius="15px"
        width="98%"
        height="90%"
      >
        <Text className={styles.customText}>Incidents by Severity</Text>
        <Box height={"80%"} paddingLeft="5%">
          <IncidentSeverityChart value={incidentSeverity} />
        </Box>
      </GridItem>
    </Grid>
  );
}
