import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Brands = () => {
  return (
    <Box id="products" p={5}>
      <Center mb={4}>
        <Heading color="darkblue">Marcas</Heading>
      </Center>
      <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <Center>
        <Image src="https://via.placeholder.com/150" alt="Products Placeholder" />
      </Center>
    </Box>
  );
};

export default Brands;
