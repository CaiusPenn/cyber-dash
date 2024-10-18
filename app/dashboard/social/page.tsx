import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "@/app/Styles.module.css";
import {CompletionRate} from "@/app/ui/dashboard/social/CompletionRate";
import PhishingResults from "@/app/ui/dashboard/social/PhishingResults";
import WorkloadData from "@/app/ui/dashboard/social/WorkloadData";
import { GraphStats, StressStats } from "@/app/ui/dashboard/technical/Stats";
import { StressChart } from "@/app/ui/dashboard/chart";
import { fetchStress } from "@/app/lib/data";

export default async function Page() {
  const stressData = await fetchStress();
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
      width={"95%"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="12px"
          paddingTop="20px"
        >
          Social Domain Page
        </Text>
      </GridItem>

      <GridItem area={"info"} className={styles.customBox} bg="#387DFF">
        <CompletionRate />
      </GridItem>
      <GridItem area={"phishing"} className={styles.customBox} width="95%">
        <PhishingResults />
      </GridItem>
      <GridItem area={"workload"} className={styles.customBox}>
        <WorkloadData />
      </GridItem>
      <GridItem area={"stress"} className={styles.customBox} >
        <StressStats
          title="Stress Reported by Departments"
          desc=""
          stats=""
          graph={<StressChart value={stressData} title="" />}
        />
      </GridItem>
    </Grid>
  );
}
