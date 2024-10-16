import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import NavBar from "@/app/ui/dashboard/NavBar";
import Header from "@/app/ui/dashboard/main/Header";



interface Props {
  children: React.ReactNode;
}

export default function Dashboard({ children }: Props) {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  `}
      gridTemplateRows={"70px 1000px"}
      gridTemplateColumns={"100px 1fr"}
      h="200px"
      gap="1"
    >
      <GridItem
        pl="2"
        bg="#FFFFFF"
        area={"header"}
        paddingTop="10px"
        boxShadow="md"
      >
        <Header />
      </GridItem>

      <GridItem pl="2" bg="#FFFFFF" area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem pl="2" bg="#F7F9FA" area={"main"} paddingLeft="30px">
        {children}
      </GridItem>
    </Grid>
  );
}
