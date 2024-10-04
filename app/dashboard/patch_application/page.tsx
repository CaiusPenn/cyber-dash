import {Stats,GraphStats} from "./Stats";
import { AdminChart,AppChart, MfaChart } from "@/app/ui/dashboard/chart";
import { fetchTechnicalData,fetchChartData } from "@/app/lib/data";
import { Grid,GridItem,Text } from "@chakra-ui/react";
import styles from '@/app/dashboard/Styles.module.css';



export default async function Page() {
    const { mfa, adminRatio, appControl} = await fetchChartData();
    const {
      patchCoverage,
      patchDeployment,
      pendingPatch,
      osPatchCoverage,
      osPatchDeployment,
      osPendingPatch
      } = await fetchTechnicalData();
      const LatestMfa = mfa[0].mfa;
      const LatestApp = appControl[0].app_control_alerts;
      const LatestAdmin = adminRatio[0].admin_ratio;
      return(
        <main>
        <h1 className={` mb-4 text-xl md:text-2xl`}>
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        {<Stats title="Patch Coverage Ratio" stats={patchCoverage} color="#387DFF" /> }
      </GridItem>
      <GridItem area={"b"} className={styles.statsBox}>
      {<Stats title="Patch Deployment Ratio" stats={patchDeployment} color="#387DFF" /> }
      </GridItem>
      <GridItem area={"c"} className={styles.statsBox}>
      {<Stats title="Pending Patch" stats={pendingPatch} color="#387DFF" /> }
      </GridItem>
      <GridItem area={"d"} className={styles.statsBox}>
      {<Stats title="OS Patch Coverage Ratio" stats={osPatchCoverage} color="#387DFF"/> }
      </GridItem>
      <GridItem area={"e"} className={styles.statsBox}>
      {<Stats title="OS Patch Deployment Ratio" stats={osPatchDeployment} color="#387DFF" /> }
      </GridItem>
      <GridItem area={"f"} className={styles.statsBox}>
      {<Stats title="OS Pending Patch" stats={osPendingPatch} color="#387DFF"/> }
      </GridItem>
      <GridItem area={"g"} className={styles.statsBox}>
      {<GraphStats title="MFA" stats={LatestMfa} graph={<MfaChart title="" value={mfa}/>}/>}
      </GridItem>
      <GridItem area={"h"} className={styles.statsBox}>
      {<GraphStats title="Admin Ratio" stats={LatestAdmin} graph={<AdminChart title="" value={adminRatio}/>}/>}
      </GridItem>
      <GridItem area={"i"} className={styles.statsBox}>
        {<GraphStats title="App Control" stats={LatestApp} graph={<AppChart title="" value={appControl}/>}/>}
      </GridItem>
    </Grid>
              
          
          
        </div>
        <div className="grid gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-2">
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        </div>
      </main>
    );
}
  
  