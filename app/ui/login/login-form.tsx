"use client";
//please
import React from "react";
import { useActionState } from "react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { LoginData, logInSchema } from "../../lib/login-data";
import { authenticate } from "@/app/lib/actions";
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
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(logInSchema) });

  return (
    <Grid
      h="100vh"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={4} colSpan={1} bg="#7D9CB7"></GridItem>

      <GridItem rowSpan={4} colSpan={1} bg="#EEEEEE">
        <Stack paddingTop={200}>
          <Stack paddingLeft={375} paddingBottom={10}>
            <Text fontSize="6xl" fontWeight={600}>
              Log in
            </Text>
          </Stack>

          <form action={formAction} className="space-y-3">
            <Stack paddingLeft={200} maxWidth={700} spacing={10}>
              <FormControl isInvalid={!!errors.email}>
                <Input
                  id="email"
                  placeholder="email"
                  bg="white"
                  height="60px"
                  fontSize="24px"
                  borderRadius="none"
                  {...register("email")}
                  required
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.password}>
                <Input
                  id="password"
                  placeholder="password"
                  type="password"
                  bg="white"
                  height="60px"
                  fontSize="24px"
                  borderRadius="none"
                  {...register("password")}
                  required
                />
                {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
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
              <Text color="red">
                <Link href="/reset-pass/reset-request">reset password</Link>
              </Text>
            </HStack>

            <Stack paddingLeft={200} maxWidth={700} paddingTop={5}>
              <Button
                borderRadius="none"
                mt={4}
                bg="#8CA4AC"
                type="submit"
                textColor="white"
                height="60px"
                fontSize="24px"
                isLoading={isPending}
                aria-disabled={isPending}
              >
                LOG IN
              </Button>
              {errorMessage && (
                <Text color="red" fontSize="sm" paddingTop={2}>
                  {errorMessage}
                </Text>
              )}
            </Stack>
          </form>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default LoginForm;