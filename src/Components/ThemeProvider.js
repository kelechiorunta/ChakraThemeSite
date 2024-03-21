import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function ThemeProvider({children}) {
    const theme = extendTheme({})

  return (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
  )
}

export default ThemeProvider