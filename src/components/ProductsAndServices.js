import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ProductsAndServices = () => {
  return (
    <Box id="products" p={5}>
      <Center mb={4}>
        <Heading color="darkblue">Productos & Servicios</Heading>
      </Center>
      <Center mb={4}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Center>
      <Center>
        <Image src="https://via.placeholder.com/150" alt="Products Placeholder" />
      </Center>
    </Box>
  );
};

export default ProductsAndServices;
