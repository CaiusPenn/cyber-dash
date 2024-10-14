import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import {UserCompletionRate} from "@/app/ui/dashboard/social/CompletionRate";
import PhishingResults from "@/app/ui/dashboard/social/PhishingResults";
import WorkloadData from "@/app/ui/dashboard/social/WorkloadData";
import { GraphStats, Stats, StressStats } from "@/app/ui/dashboard/technical/Stats";
import { GaugeChart,StressChart } from "@/app/ui/dashboard/chart";
import { fetchUserStress } from "@/app/lib/data";
import { cookies } from "next/headers";

export default async function userDash() {
  const stressData = await fetchUserStress(cookies().get('id')?.value);
  
  return (
    <Grid
      templateAreas={`"title title title title title "
                  "info info info phishing phishing"
                  "workload workload workload stress stress"`}
      h="100vh"
      gap="10"
      gridTemplateRows={"25px 275px 350px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(5, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="12px"
          paddingTop="20px"
        >
          Employee Dashboard
        </Text>
      </GridItem>

      <GridItem area={"info"} className={styles.customBox} bg="#387DFF">
        <UserCompletionRate />
      </GridItem>
      <GridItem area={"phishing"} className={styles.customBox} width="95%">
        <PhishingResults />
      </GridItem>
      <GridItem area={"workload"} className={styles.customBox}>
        <WorkloadData />
      </GridItem>
      <GridItem area={"stress"} className={styles.customBox} width="95%">
        <GraphStats title={'Stress Reported'} stats={stressData} graph={<GaugeChart value={stressData} gValue={14}/>} desc='Stress reported by user on a scale of 1-7'/>
      </GridItem>
    </Grid>
  );
}
