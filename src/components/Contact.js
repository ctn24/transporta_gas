import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
  return (
    <Box id="contact" p={5}>
      <Heading>Contacto</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <Image src="https://via.placeholder.com/150" alt="Contact Placeholder" />
    </Box>
  );
};

export default Contact;
