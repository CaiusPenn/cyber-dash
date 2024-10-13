import {
  Stats,
  GraphStats,
  TechnicalStats,
} from "../../ui/dashboard/technical/Stats";
import { AdminChart, AppChart, MfaChart } from "@/app/ui/dashboard/chart";
import { fetchTechnicalData, fetchChartData } from "@/app/lib/data";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "@/app/Styles.module.css";

export default async function Page() {
  const { mfa, adminRatio, appControl } = await fetchChartData();
  const {
    patchCoverage,
    patchDeployment,
    pendingPatch,
    osPatchCoverage,
    osPatchDeployment,
    osPendingPatch,
  } = await fetchTechnicalData();
  const LatestMfa = mfa[0].mfa;
  const LatestApp = appControl[0].app_control_alerts;
  const LatestAdmin = adminRatio[0].admin_ratio;
  return (
    <Grid
      templateAreas={`"title title title"
                  "a b c "
                  "d e f  "
                  "refresh refresh frefresh "
                  "g h i"`}
      h="90%"
      gap="10"
      width="99%"
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
          Technical Domain
        </Text>
      </GridItem>
      <GridItem area={"a"} className={styles.statsBox}>
        {
          <Stats
            title="Patch Coverage Ratio"
            stats={patchCoverage}
            color="#387DFF"
          />
        }
      </GridItem>
      <GridItem area={"b"} className={styles.statsBox}>
        {
          <Stats
            title="Patch Deployment Ratio"
            stats={patchDeployment}
            color="#6DD230"
          />
        }
      </GridItem>
      <GridItem area={"c"} className={styles.statsBox}>
        {<Stats title="Pending Patch" stats={pendingPatch} color="#FE7C4B" />}
      </GridItem>
      <GridItem area={"d"} className={styles.statsBox}>
        {
          <Stats
            title="OS Patch Coverage Ratio"
            stats={osPatchCoverage}
            color="#23B899"
          />
        }
      </GridItem>
      <GridItem area={"e"} className={styles.statsBox}>
        {
          <Stats
            title="OS Patch Deployment Ratio"
            stats={osPatchDeployment}
            color="#8978FF"
          />
        }
      </GridItem>
      <GridItem area={"f"} className={styles.statsBox}>
        {
          <Stats
            title="OS Pending Patch"
            stats={osPendingPatch}
            color="#D5698A"
          />
        }
      </GridItem>
      <GridItem area={"g"} className={styles.statsBox}>
        {
          <GraphStats
            title="MFA"
            stats={LatestMfa}
            desc=""
            graph={<MfaChart title="" value={mfa} />}
          />
        }
      </GridItem>
      <GridItem area={"h"} className={styles.statsBox}>
        {
          <GraphStats
            title="Admin Ratio"
            stats={LatestAdmin}
            desc=""
            graph={<AdminChart title="" value={adminRatio} />}
          />
        }
      </GridItem>
      <GridItem area={"i"} className={styles.statsBox}>
        {
          <TechnicalStats
            title="App Control"
            stats={LatestApp}
            desc=""
            graph={<AppChart title="" value={appControl} />}
          />
        }
      </GridItem>
    </Grid>
  );
}
