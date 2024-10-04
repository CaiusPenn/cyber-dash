"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";
import { LoginData, logInSchema } from "../lib/login-data";
import {
  Grid,
  GridItem,
  Text,
  Stack,
  HStack,
  Button,
  Checkbox,
  Input,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginData>({ resolver: zodResolver(logInSchema) });

  const submitFormData = (data: LoginData) => console.log(data);

  return (
    <Grid
      h="3000px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={4} colSpan={1} bg="#1C61FF"></GridItem>

      <GridItem rowSpan={4} colSpan={1} bg="#FFFFFF">
        <Stack paddingTop={200} spacing="0">
          <Stack paddingLeft={375} paddingBottom={10} spacing="0">
            <Text fontSize="70px" fontWeight={600} color="#1C62FF">
              Log in
            </Text>
            <Text fontSize="24px" fontWeight={400} color="#334681">
              Phishing Phighters
            </Text>
          </Stack>

          <form onSubmit={handleSubmit(submitFormData)}>
            <Stack paddingLeft={200} maxWidth={700} spacing={10}>
              <FormControl>
                <Input
                  id="email"
                  placeholder="email"
                  bg="white"
                  height={["40px", "50px", "60px"]} // Responsive height
                  fontSize={["16px", "20px", "24px"]} // Responsive font size
                  borderRadius="none"
                  {...register("email")}
                />
              </FormControl>

              <FormControl>
                <Input
                  id="password"
                  placeholder="password"
                  type="password"
                  bg="white"
                  height={["40px", "50px", "60px"]} // Responsive height
                  fontSize={["16px", "20px", "24px"]} // Responsive font size
                  borderRadius="none"
                  {...register("password")}
                />
              </FormControl>
            </Stack>

            <HStack
              justifyContent="space-between"
              maxWidth={700}
              paddingLeft={200}
              paddingTop={2}
              paddingBottom={5}
            >
              <Checkbox {...register("rememberMe")} color={"#8CA4AC"}>
                Remember Me
              </Checkbox>
              <Text color="#DD6E42">
                <Link href="/reset-pass/reset-request">reset password</Link>
              </Text>
            </HStack>

            <Stack paddingLeft={200} maxWidth={700} paddingTop={5}>
              <Button
                borderRadius="none"
                mt={4}
                bg="#1C61FF"
                type="submit"
                textColor="white"
                height={["40px", "50px", "60px"]} // Responsive height
                fontSize={["16px", "20px", "24px"]} // Responsive font size
              >
                LOG IN
              </Button>
            </Stack>
          </form>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default LoginForm;
