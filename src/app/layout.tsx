import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'

import Header from '@/components/Header'
import NavigationBar from '@/components/NavigationBar'

import './globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '갓생',
  description: '갓생을 살아보자',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={(notoSansKR.className, 'bg-purple-100')}>
        <ChakraProvider>
          <div className="max-w-[440px] mx-auto bg-white shadow-2xl min-h-screen">
            <Header />
            <div className="py-14">{children}</div>
            <NavigationBar />
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}
