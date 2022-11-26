import { ChakraProvider } from '@chakra-ui/react'
import Navigation from '../components/Navigation/Navigation'
import theme from '../theme'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter >
        <Navigation />
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  </React.StrictMode>

}

export default MyApp
