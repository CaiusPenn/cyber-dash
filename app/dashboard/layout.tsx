import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { IoIosNotifications } from "react-icons/io";

import NavBar from "./admin/NavBar";
import { Children } from "react";
import Header from "./admin/Header";

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
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        pl="2"
        bg="#FFFFFF"
        area={"header"}
        paddingTop="10px"
        boxShadow="md"
      >
        <Header></Header>
      </GridItem>
      <GridItem pl="2" bg="#FFFFFF" area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem pl="2" bg="#F7F9FA" area={"main"}>
        {children}
      </GridItem>
    </Grid>
  );
}
