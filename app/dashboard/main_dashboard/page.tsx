import { Flex, Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import styles from "../Styles.module.css";
import { Stats, GraphStats } from "../patch_application/Stats";
import Scores from "./Scores";
import { fetchLatestIncidents, fetchIncidentsSeverity } from "@/app/lib/data";
import { IncidentChart,IncidentSeverityChart } from "@/app/ui/dashboard/chart";

export default async function Page(){
  const incidents = await fetchLatestIncidents();
  const incidentSeverity = await fetchIncidentsSeverity();
  return (
    <main>
    <h1 className={` mb-4 text-xl md:text-2xl`}></h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <Grid
      templateAreas={`"overview overview overview"
                      "info info info"
                      "incidents threats maturity"
                      "scores week week"`}
      h="full"
      gap="30"
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

      <GridItem
        area={"incidents"}
        bg="#FFFFFF"
        borderRadius="15px"
        paddingLeft="100x"
        width="95%">
      <GraphStats stats={incidents[0].severity} title="Severity of Latest Incident" graph={<IncidentChart value={incidents} title=""/>}/>
      </GridItem>

      <GridItem area={"threats"} bg="#FFFFFF" borderRadius="15px">
        
      </GridItem>

      <GridItem area={"maturity"} bg="#FFFFFF" borderRadius="15px" width="95%">
        
      </GridItem>

      <GridItem area={"scores"} bg="#FFFFFF" borderRadius="15px" height="90%">
       <Scores></Scores>
      </GridItem>

      <GridItem
        area={"week"}
        bg="#FFFFFF"
        borderRadius="15px"
        width="98%"
        height="90%"
      >
        <IncidentSeverityChart value={incidentSeverity} title="Incidents by Severity"/>
      </GridItem>
    </Grid>
    </div>
    </main>
  );
};

