'use client';

import { Grid, GridItem, Box, Text, Button, Image } from '@chakra-ui/react';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';

export default function Page() {
  return (
    <Grid
      h="100vh"
      templateRows="auto 1fr" // Header takes auto height, content fills remaining space
      templateColumns={{ base: '1fr', md: '1fr 1fr' }} // One column on mobile, two on desktop
      p={6}
      gap={4}
      overflow="hidden"
    >
      {/* Header Section */}
      <GridItem
        colSpan={2}
        h={{ base: '20', md: '52' }}
        rounded="lg"
        bg="#1C61FF"
        p={4}
        display="flex"
        alignItems="flex-end"
      >
      </GridItem>

      {/* Content Section */}
      <GridItem colSpan={{ base: 1, md: 1 }} bg="gray.50" rounded="lg" p={{ base: 6, md: 20 }}>
        <Box>
          <Text fontSize={{ base: 'xl', md: '3xl' }} color="gray.800" mb={6}>
            <strong>Phishing Phighters</strong> <br />
            Stay Updated. Stay Secure.
          </Text>
          <Button
            as={Link}
            href="/login"
            size={{ base: 'sm', md: 'md' }}
            bg="#1C61FF"
            color="white"
            rightIcon={<MdArrowRightAlt width="1.25em" />}
          >
            Log in
          </Button>
        </Box>
      </GridItem>

      {/* Image Section */}
      <GridItem
        colSpan={{ base: 1, md: 1 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={{ base: 6, md: 12 }}
      >
        <Image
          src="/hero-desktop.png"
          alt="Screenshots of the dashboard project showing desktop version"
          display={{ base: 'none', md: 'block' }} // Show image on larger screens only
          borderRadius="lg"
        />
      </GridItem>
    </Grid>
  );
}
