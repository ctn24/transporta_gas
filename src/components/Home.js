import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Truck from '../assets/truck.png';

const Home = () => {
  return (
    <Box id="home" p={5} bg="lightblue">
      <Flex direction={['column', 'row']} align="center">
        <Image src={Truck} alt="Truck" boxSize={['100%', '50%']} mb={[4, 0]} />
        <Box ml={[0, 4]} flex={1}>
          <Heading mb={4}>Inicio</Heading>
          <Box height="2px" backgroundColor="black" width="25%" mb={4}></Box> {/* This adds a small line */}
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
