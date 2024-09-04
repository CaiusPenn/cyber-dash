"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

import { useForm, FieldValues } from "react-hook-form";
import { resetPasswordData, resetPasswordSchema } from "../lib/login-data";
import {
  Grid,
  GridItem,
  Stack,
  FormControl,
  Input,
  HStack,
  Checkbox,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<resetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const submitFormData = (data: resetPasswordData) => console.log(data);

  return (
    <Grid
      h="3000px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={4} colSpan={1} bg="#7D9CB7"></GridItem>

      <GridItem rowSpan={4} colSpan={1} bg="#EEEEEE">
        <Stack paddingTop={200}>
          <Stack paddingLeft={227} paddingBottom={10}>
            <Text fontSize="6xl" fontWeight={600}>
              Reset Password
            </Text>
          </Stack>

          <form onSubmit={handleSubmit(submitFormData)}>
            <Stack paddingLeft={200} maxWidth={700} spacing={7}>
              <FormControl>
                <Input
                  id="email"
                  placeholder="email"
                  bg="white"
                  // size="lg"
                  height="60px"
                  fontSize="24px"
                  borderRadius="none"
                  {...register("email")}
                />
              </FormControl>

              <FormControl>
                <Input
                  id="password"
                  placeholder="new password"
                  type="password"
                  bg="white"
                  height="60px"
                  fontSize="24px"
                  borderRadius="none"
                  {...register("password")}
                />
              </FormControl>

              <FormControl>
                <Input
                  id="confirmPassword"
                  placeholder="confirm new password"
                  type="password"
                  bg="white"
                  height="60px"
                  fontSize="24px"
                  borderRadius="none"
                  {...register("confirmPassword")}
                />
              </FormControl>
            </Stack>

            <Stack paddingLeft={200} maxWidth={700} paddingTop={5}>
              <Button
                borderRadius="none"
                mt={4}
                bg="#8CA4AC"
                type="submit"
                textColor="white"
                fontSize="24px"
                fontWeight="100px"
                height="60px"
              >
                RESET
              </Button>
            </Stack>
          </form>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ResetPassword;
