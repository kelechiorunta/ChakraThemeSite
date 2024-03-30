import React from 'react'
import { Flex, Box, Button, Text, Icon, Menu, MenuButton, MenuList, MenuItem, Stack } from '@chakra-ui/react';
import { FaBars, FaCaretDown  } from 'react-icons/fa'; // Example icon from react-icons library


function Header() {
  return (
    <Flex
    as="header"
    align="center"
    justify="space-between"
    px={4}
    py={2}
    position={'sticky'}
    top={'0'}
    zIndex={'5'}
    bg="blue.500"
    color="white"
  >
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        <Icon as={FaBars} boxSize={6} ml={4}  cursor="pointer" />
        WEBCHAKA
      </Text>
    </Box>

    <Flex align="center">
       <Flex display={{base:'none', sm:"none", md:'flex'}}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
      </Flex> 
        
      <Menu display={{base:'block', sm:"block", md:'none'}}>
          <MenuButton as={Button} rightIcon={<FaCaretDown />} display={{base:'block',sm:'block', md:'none'}}>
            More
          </MenuButton>
          <MenuList display={{base:'block', md:'none', sm:'block'}}>
            <Stack spacing={0}
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'stretch', md: 'center' }}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            
            >
              <MenuItem>
                <Button variant="ghost" w="100%" textAlign="left">
                  Home
                </Button>
              </MenuItem>
              <MenuItem>
                <Button variant="ghost" w="100%" textAlign="left">
                  About
                </Button>
              </MenuItem>
              <MenuItem>
                <Button variant="ghost" w="100%" textAlign="left">
                  Services
                </Button>
              </MenuItem>
            </Stack>
          </MenuList>
        </Menu>

      
    </Flex>
  </Flex>
  )
}

export default Header