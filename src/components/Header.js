import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import logo from '../assets/logo.png';

const Header = () => {
  const fontSize = useBreakpointValue({ base: 'xl', md: 'lg', lg: 'xl' });
  const logoSize = useBreakpointValue({ base: '40px', md: '35px', lg: '45px' });
  const paddingY = useBreakpointValue({ base: '2', md: '2', lg: '3' });

  return (
    <Flex justify="center" bg="black" ml={57} mr={57} rounded={10}>
      <Box color="white" py={paddingY} borderRadius="md" w="full">
        <Flex justify="center" mb={[2, 2]} align="center">
          <Image src={logo} alt="Pemex Logo" boxSize={logoSize} />
          <Text fontSize={fontSize} ml={2}>PEMEX</Text>
        </Flex>

        <Flex justify="space-around" direction={['column', 'row']} align="center">
          <a href="#home" style={{ color: 'white', fontWeight: 'bold', fontSize: fontSize, margin: '8px' }}>Inicio</a>
          <a href="#about" style={{ color: 'white', fontWeight: 'bold', fontSize: fontSize, margin: '8px' }}>Nosotros</a>
          <a href="#products" style={{ color: 'white', fontWeight: 'bold', fontSize: fontSize, margin: '8px' }}>Productos & Servicios</a>
          <a href="#coverage" style={{ color: 'white', fontWeight: 'bold', fontSize: fontSize, margin: '8px' }}>Cobertura</a>
          <a href="#contact" style={{ color: 'white', fontWeight: 'bold', fontSize: fontSize, margin: '8px' }}>Contacto</a>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
