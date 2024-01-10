import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

import './globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '갓생',
  description: '갓생을 살아보자',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
