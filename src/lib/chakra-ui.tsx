'use client'

import { ChakraProvider as Provider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `'NanumSquare', sans-serif`,
    heading: `'NanumSquare', sans-serif`,
  },
})

export const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>
}
