import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Text,
  Stack,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { MdArrowRightAlt } from "react-icons/md";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined
  );

  return (
    <Grid
      templateAreas={`"Title"
                "form"`}
      h="full"
      gap="10"
      width="98%"
      gridTemplateRows={"150px 300px 300px"}
      color={"#334681"}
      fontWeight={"bold"}
      gridTemplateColumns={"repeat(1, 1fr)"}
      paddingTop="100px"
    >
      <GridItem area="Title">
        <Flex
          as="form"
          action={formAction}
          bg="#FFFFFF"
          p={8}
          align="center" // Center content vertically
          justify="center" // Center content horizontally
        >
          <Stack paddingBottom={10} spacing="0">
            <Text fontSize="70px" fontWeight={600} color="#1C62FF">
              Log in
            </Text>
            <Text fontSize="24px" fontWeight={400} color="#334681">
              Phishing Phighters
            </Text>
          </Stack>
        </Flex>
      </GridItem>

      <GridItem area="form">
        <Flex
          as="form"
          action={formAction}
          bg="#FFFFFF"
          p={8}
          align="center" // Center content vertically
          // justify="center" // Center content horizontally
          paddingLeft="10%"
        >
          <Stack width="1250px">
            <Stack>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  bg="white"
                  borderColor="gray.200"
                  width="100%"
                  _placeholder={{ color: "gray.500" }}
                />
              </FormControl>

              <FormControl id="password" mb={6}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={5}
                  bg="white"
                  borderColor="gray.200"
                  _placeholder={{ color: "gray.500" }}
                />
              </FormControl>
            </Stack>

            <Stack>
              <Button
                bg="#1C61FF"
                color="#FFFFFF"
                isLoading={isPending}
                type="submit"
              >
                Log in
                <MdArrowRightAlt />
              </Button>
            </Stack>

            {errorMessage && (
              <Text color="red.500" mt={2}>
                {errorMessage}
              </Text>
            )}
          </Stack>
        </Flex>
      </GridItem>
    </Grid>
  );
}
