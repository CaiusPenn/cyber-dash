import { Grid, GridItem, Stat, Text } from "@chakra-ui/react";
import PolicyViolations from "./PolicyViolations";
import styles from "../Styles.module.css";
import { GraphStats } from "../technical/Stats";
import { PolicyChart } from "@/app/ui/dashboard/chart";
import { fetchPolicy,fetchUniqueUsers } from "@/app/lib/data";
import { Stats } from "../technical/Stats";
export default async function Page(){
  const policies = await fetchPolicy();
  const usersCount = await fetchUniqueUsers();
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}></h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <Grid
      templateAreas={`"title title title"
                "a b c "
                "d e f "
                "g g f"`}
      h="full"
      gap="10"
      width="98%"
      gridTemplateRows={"40px 125px 300px 400px"}
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
          Organisational Domain Page
        </Text>
      </GridItem>
      <GridItem area={"a"} className={styles.statsBox}>
        <Stats title="Number of partcipants" stats={usersCount[0].count} color="#387DFF"/>
      </GridItem>
      <GridItem area={"b"} className={styles.statsBox}>
       
      </GridItem>
      <GridItem area={"c"} className={styles.statsBox}>
       
      </GridItem>
      <GridItem area={"d"} className={styles.statsBox}>
       
      </GridItem>
      <GridItem area={"e"} className={styles.statsBox}>
      {<GraphStats title="Latest Violation" stats={policies[0].date.toDateString().slice(4)}
      graph={<PolicyChart title="" value={policies}/>}/>}
      </GridItem>
      <GridItem area={"f"} className={styles.statsBox}>
       <PolicyViolations/>
      </GridItem>
      <GridItem area={"g"} className={styles.statsBox}>
      
      </GridItem>
    </Grid>
    </div>
    </main>
  );
};

