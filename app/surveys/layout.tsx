import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Grid
      h="1024px"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(20, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={1} colSpan={1} bg="#7D9CB7"></GridItem>

      <GridItem rowSpan={1} colSpan={19} bg="#EEEEEE">
        <Stack paddingTop="5%" paddingLeft="5%" spacing={0}>
          <Text fontSize="6xl" fontWeight={600}>
            Survey
          </Text>
          <Text fontSize="xl" paddingLeft="2%" textColor="#4F6D7A">
            organisation
          </Text>
        </Stack>
        {children}
      </GridItem>
    </Grid>
  );
}
