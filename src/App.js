import React from 'react';
import { Box } from '@chakra-ui/react'; // Import Box
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ProductsAndServices from './components/ProductsAndServices';
import Coverage from './components/Coverage';
import Brands from './components/Brands';
import Contact from './components/Contact';

function App() {
  return (
    <Box bg="lightblue" minHeight="100vh">
      <Header />
      <Home />
      <AboutUs />
      <ProductsAndServices />
      <Coverage />
      <Brands />
      <Contact />
    </Box>
  );
}

export default App;
