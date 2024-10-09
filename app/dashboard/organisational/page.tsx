import { Grid, GridItem, Stat, Text } from "@chakra-ui/react";
import PolicyViolations from "../../ui/dashboard/organisational/PolicyViolations";
import styles from "@/app/Styles.module.css";
import { GraphStats, Stats } from "../../ui/dashboard/technical/Stats";
import { PolicyChart, CategoryChart } from "@/app/ui/dashboard/chart";
import { fetchPolicy,fetchUniqueUsers,fetchScores } from "@/app/lib/data";

function colorDecide(value:any,threshhold:any){
  if (value > threshhold){
    return "#23cf1d";
  }
  return "#f23e2e"
}

export default async function Page(){
  const policies = await fetchPolicy();
  const usersCount = (await fetchUniqueUsers());
  const fetch = await fetchScores();
  const scores = fetch.score;
  const category = fetch.category;

  let totalScore = 0;
  for (const x of scores.values()) {
    totalScore += x;
  }
  totalScore = Math.floor(totalScore/scores.size);
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
          paddingTop="20px"
        >
          Organisational Domain Page
        </Text>
      </GridItem>
      <GridItem area={"a"} className={styles.statsBox}>
        <Stats title="Number of partcipants" stats={usersCount.length} color={colorDecide(usersCount.length,10)}/>
      </GridItem>
      <GridItem area={"b"} className={styles.statsBox}>
       <Stats title="Overall Security Awareness" stats={totalScore} color={colorDecide(totalScore,15)}/>
      </GridItem>
      <GridItem area={"c"} className={styles.statsBox}>
       <Stats title="Investment into Cyber" stats="$298,020" color="#23cf1d"/>
      </GridItem>
      <GridItem area={"d"} className={styles.statsBox}>
       {<GraphStats title="Category Scores" desc="Scores For Each Category Surveyed" stats={''}
      graph={<CategoryChart title='' value={category}/>}/>}
      </GridItem>
      <GridItem area={"e"} className={styles.statsBox}>
      {<GraphStats title="Latest Violation" desc="Trend of policy violations over time" stats={policies[0].date.toDateString().slice(4)}
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

