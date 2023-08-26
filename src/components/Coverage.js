import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Coverage = () => {
  return (
    <Box id="coverage" p={5}>
      <Center mb={4}>
        <Heading color="darkblue">Cobertura</Heading>
      </Center>
      <Center mb={4}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Center>
      <Center>
        <Box borderWidth="1px" borderColor="black" borderRadius="md" p={2}>
          <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
      </Center>
      <Center mt={4}>
        <Image src="https://via.placeholder.com/150" alt="Coverage Placeholder" />
      </Center>
    </Box>
  );
};

export default Coverage;
