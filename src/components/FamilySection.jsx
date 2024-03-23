import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const FamilySection = () => {
  return (
    <Box mb={8}>
      <Heading as="h2" variant="section-title" mb={4}>
        Family in Oregon
      </Heading>
      <Box>
        <Text mb={4}>My family has deep roots in Oregon. My parents and siblings live in the beautiful city of Portland, known for its vibrant culture and stunning natural surroundings. Whenever I have the chance to visit, we enjoy exploring the local parks, trying out new restaurants, and catching up on each other's lives. Family is incredibly important to me, and I cherish the time we spend together in Oregon.</Text>
      </Box>
    </Box>
  );
};

export default FamilySection;
