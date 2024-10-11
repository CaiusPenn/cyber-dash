'use client';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { Button, Input, FormControl, FormLabel, Box, Heading, Text } from '@chakra-ui/react';
import { MdArrowRightAlt } from 'react-icons/md';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined,
  );

  return (
    <Box
      as="form"
      action={formAction}
      className="space-y-3"
      bg="gray.50"
      p={8}
      rounded="lg"
    >
      <Heading textAlign="center" mb={6} fontSize="44px">
        Log In
      </Heading>

      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          bg="white"
          borderColor="gray.200"
          _placeholder={{ color: 'gray.500' }}
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
          _placeholder={{ color: 'gray.500' }}
        />
      </FormControl>

      <Button
        bg="#1C61FF"
        color="#000000"
        isLoading={isPending}
        type="submit"
      >
        Log in 
        <MdArrowRightAlt/>
      </Button>

      {errorMessage && (
        <Text color="red.500" mt={2}>
          {errorMessage}
        </Text>
      )}
    </Box>
  );
}
