import React from 'react'
import { Box, Button, Heading, Grid } from '@chakra-ui/react'
import CarouselComponent from './CarouselComponent'
import Header from './Header'


function ThemeComponent() {
  return (
    <Box m={{base:4, md:4}} borderRadius="20px" borderWidth="2px" shadow="md" 
    w={{ base: "94.75%", sm:"94%", md: "92.5%" }} margin={{base:"3%", sm:"3%", md:'4%'}}
    gridRow={{base:'col-12', sm:'col-sm-12', md:'col-lg-6'}}>
        <Header />
        <Heading as='h1' size={{base:'md', sm: 'lg', md:'lg'}} marginTop={{sm:"8px", md:"8px"}} marginBottom={{sm:"4px", md:"4px"}} textShadow="2px 2px 5px red" textTransform={'uppercase'}>
            Welcome to My Chakra App
        </Heading>
        <Button colorScheme='blue' size={{base:'md', sm: 'lg', md:'lg'}}>Click Me!</Button>
        <Box shadow='md' borderWidth='5px' height={{base:"400px", sm:'350px', md:'300px'}}
        />
        <CarouselComponent />
        <Grid
        templateRows={{base:"repeat(1, 100px)", sm:"repeat(2, 100px)", md:"repeat(3, 100px)"}}
        templateColumns={{base:"100%", sm:"repeat(2, 1fr)", md:"repeat(3, 1fr)"}}
        gap={4}
        p={4}
        >
        <Box bg="blue.200">1</Box>
        <Box bg="green.200">2</Box>
        <Box bg="red.200">3</Box>
        <Box bg="purple.200" gridColumn={{sm:"span 1",md:"span 2"}}>4 (Span 2 columns)</Box>
        <Box bg="yellow.200" gridRow={{sm:"2 / 3", md:"2 / 4"}}>5 (Starts at Row 2, Ends at Row 4)</Box>
        <Box bg="cyan.200">6</Box>
        </Grid>
    </Box>
  )
}

export default ThemeComponent