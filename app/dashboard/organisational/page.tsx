import { Box, Grid, GridItem, Stat, Text } from "@chakra-ui/react";
import PolicyViolations from "../../ui/dashboard/organisational/PolicyViolations";
import styles from "@/app/Styles.module.css";
import {
  CategoryStats,
  GraphStats,
  Stats,
} from "../../ui/dashboard/technical/Stats";
import { PolicyChart, CategoryChart } from "@/app/ui/dashboard/chart";
import { fetchPolicy, fetchUniqueUsers, fetchScores } from "@/app/lib/data";
import TrainingEffectiveness from "@/app/ui/dashboard/organisational/TrainingEffectiveness";

function colorDecide(value: any, threshhold: any) {
  if (value > threshhold) {
    return "#23cf1d";
  }
  return "#f23e2e";
}

export default async function Page() {
  const policies = await fetchPolicy();
  const users = await fetchUniqueUsers();
  const fetch = await fetchScores();
  const scores = fetch.score;
  const category = fetch.category;

  let usersCount = users.uniqueUsersCount;

  let totalScore = 0;
  for (const x of scores.values()) {
    totalScore += x;
  }
  totalScore = Math.floor(totalScore / scores.size);
  return (
    <Grid
      templateAreas={`"title title title"
                "a b c "
                "d e f "
                "g g f"`}
      h="full"
      gap="10"
      width="98%"
      gridTemplateRows={"35px 125px 300px 400px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(3, 1fr)"}
    >
      <GridItem area={"title"}>
        <Text
          className={styles.customText}
          fontSize="20px"
          padding="0px"
          paddingTop="0px"
        >
          Organisational Domain Page
        </Text>
      </GridItem>
      <GridItem area={"a"} className={styles.statsBox}>
        <Stats
          title="Number of partcipants"
          stats={String(usersCount)}
          color={colorDecide(usersCount, 10)}
        />
      </GridItem>
      <GridItem area={"b"} className={styles.statsBox}>
        <Stats
          title="Overall Security Awareness"
          stats={totalScore}
          color={colorDecide(totalScore, 15)}
        />
      </GridItem>
      <GridItem area={"c"} className={styles.statsBox}>
        <Stats title="Investment into Cyber" stats="$298,020" color="#23cf1d" />
      </GridItem>
      <GridItem area={"d"} className={styles.statsBox} width="95%">
        {
          <CategoryStats
            title="Category Scores"
            desc="Survey Scores for Each Category"
            stats={""}
            graph={<CategoryChart title="" value={category} />}
          />
        }
      </GridItem>
      <GridItem area={"e"} className={styles.statsBox}>
        {
          <GraphStats
            title="Latest Violation"
            desc="Policy Violations by Date"
            stats={policies[0].date.toDateString().slice(4)}
            tSize="12px"
            tColor="grey"
            graph={<PolicyChart title="" value={policies} />}
          />
        }
      </GridItem>
      <GridItem area={"f"} className={styles.statsBox}>
        <PolicyViolations />
      </GridItem>
      <GridItem area={"g"} className={styles.statsBox}>
        <TrainingEffectiveness />
      </GridItem>
    </Grid>
  );
}
