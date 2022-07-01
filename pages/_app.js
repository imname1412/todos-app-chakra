import '../styles/globals.css'
import { ChakraProvider , ColorModeScript } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <ColorModeScript initialColorMode='light' />
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
