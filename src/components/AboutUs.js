import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import gasolineraImage from '../assets/gasolinera.jpg'; // Import the image

const AboutUs = () => {
  return (
    <Box id="about" p={5}>
      <Center mb={4}>
        <Heading color="darkblue">Quienes somos?</Heading>
      </Center>
      <Flex direction={['column', 'row']} align="center">
        <Box flex={1} pr={[0, 4]}>
          <Text>Somos la empresa líder en distribución de gasolina y diesel.</Text>
        </Box>
        <Image src={gasolineraImage} alt="Gasolinera" boxSize={['100%', '50%']} />
      </Flex>
    </Box>
  );
};

export default AboutUs;
