"use client";
import React from "react";
import styles from "@/app/ui/home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

import { useForm, FieldValues } from "react-hook-form";
import { emailData, emailSchema } from "@/app/lib/login-data";
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

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<emailData>({ resolver: zodResolver(emailSchema) });

  const submitFormData = (data: emailData) => console.log(data);

  return (
    <Grid
      h="3000px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={4} colSpan={1} bg="#1C61FF"></GridItem>

      <GridItem rowSpan={4} colSpan={1} bg="#FFFFFF">
        <Stack paddingTop={200}>
          <Stack align="center" paddingBottom={50}>
            <Text
              fontSize="6xl"
              fontWeight={600}
              paddingLeft={9}
              margin={0}
              color="#1C61FF"
            >
              Reset Password
            </Text>
            <Text color="#DD6E42">
              We will send a new password to the given email{" "}
            </Text>
          </Stack>

          <form onSubmit={handleSubmit(submitFormData)}>
            <Stack
              align="center"
              paddingLeft={200}
              maxWidth={700}
              paddingBottom={6}
            >
              <FormControl>
                <Input
                  id="email"
                  placeholder="email"
                  bg="white"
                  {...register("email")}
                  height="60px"
                  fontSize="24px"
                  borderRadius="none"
                />
              </FormControl>
            </Stack>

            <Stack paddingLeft={200} maxWidth={700} paddingTop={5}>
              <Button
                borderRadius="none"
                mt={4}
                bg="#1C61FF"
                type="submit"
                textColor="white"
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
