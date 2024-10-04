"use client";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles.module.css";
import Stats from "./Stats";
import SmallStats from "../main_dashboard/SmallStats";
import { fetchTechnicalData,fetchChartData } from "@/app/lib/data";
import { LineGraph } from "../LineGraph";
export default async function page() {
  const {mfa,adminRatio,appControl} = await fetchChartData();
  const {
    patchCoverage,
    patchDeployment,
    pendingPatch,
    osPatchCoverage,
    osPatchDeployment,
    osPendingPatch,
  } = await fetchTechnicalData();
  const stringPatchCoverage = String(patchCoverage)+'%';
  const stringPatchDeployment = String (patchDeployment)+'hrs';
  const stringPendingPatch = String(pendingPatch);
  const stringOsPatchCoverage = String(osPatchCoverage)+'%';
  const stringOsPatchDeployment = String(osPatchDeployment)+'hrs';
  const stringOsPendingPatch = String(osPendingPatch);

  const stringMfa = String(mfa[mfa.length-1].mfa);
  const stringAdminRatio = String(adminRatio[adminRatio.length-1].admin_ratio);
  const stringAppControl = String(appControl[appControl.length-1].app_control_alerts);
  

  return (
    <Grid
      templateAreas={`"title title title"
                  "a b c "
                  "d e f  "
                  "refresh refresh frefresh "
                  "g h i"`}
      h="full"
      gap="10"
      width="98%"
      gridTemplateRows={"35px 190px 190px 20px 190px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="0px"
          paddingTop="20px"
        >
          Patch Application
        </Text>
      </GridItem>
      <GridItem area={"a"} className={styles.statsBox}>
        <Stats
          title="Patch coverage ratio"
          stats={stringPatchCoverage}
          color="#387DFF"
          icon="icon"
        ></Stats>
      </GridItem>
      <GridItem area={"b"} className={styles.statsBox}>
        <Stats
          title="Patch Deployment Time"
          stats={stringPatchDeployment}
          color="#6DD230"
          icon="icon"
        ></Stats>
      </GridItem>
      <GridItem area={"c"} className={styles.statsBox}>
        <Stats
          title="Pending Patches Count"
          stats={stringPendingPatch}
          color="#FE7C4B"
          icon="icon"
        ></Stats>
      </GridItem>
      <GridItem area={"d"} className={styles.statsBox}>
        <Stats
          title="OS Patch Coverage Ratio"
          stats={stringOsPatchCoverage}
          color="#23B899"
          icon="icon"
        ></Stats>
      </GridItem>
      <GridItem area={"e"} className={styles.statsBox}>
        <Stats
          title="OS Patch Deployment Time"
          stats={stringOsPatchDeployment}
          color="#8978FF"
          icon="icon"
        ></Stats>
      </GridItem>
      <GridItem area={"f"} className={styles.statsBox}>
        <Stats
          title="OS Pending Patches Count"
          stats={stringOsPendingPatch}
          color="#D5698A"
          icon="icon"
        ></Stats>
      </GridItem>
      <GridItem area={"g"} className={styles.statsBox}>
        <SmallStats
          graph={
            <LineGraph
              color="#387DFF"
              grad={["#A7C5FF", "#D3E2FF", "#FFFFFF"]}
              datapoints={[]}
            />
          }
          stats={stringMfa}
          title="MFA"
          color="#387DFF"
        />
      </GridItem>
      <GridItem area={"h"} className={styles.statsBox}>
        <SmallStats
          graph={
            <LineGraph
              color="#6DD230"
              grad={["#B6E998", "#DBF4CB", "#FFFFFF"]}
              datapoints={[]}
            />
          }
          stats={stringAdminRatio}
          title="Admin Privileges Ratio"
          color="#6DD230"
        />
      </GridItem>
      <GridItem area={"i"} className={styles.statsBox}>
        <SmallStats
          graph={
            <LineGraph
              color="#FE7C4B"
              grad={["#FFBEA5", "#FFDED2", "#FFFFFF"]}
              datapoints={[]}
            />
          }
          stats={stringAppControl}
          title="Application Control Alerts"
          color="#FE7C4B"
        />
      </GridItem>
    </Grid>
  );
};

