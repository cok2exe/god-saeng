import type { Metadata } from 'next'

import NavigationBar from '@/components/NavigationBar'

import { ChakraProvider } from '@/lib/chakra-ui'

import './globals.css'

export const metadata: Metadata = {
  title: '갓생',
  description: '갓생을 살아보자',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-purple-100">
        <ChakraProvider>
          <div className="max-w-[440px] mx-auto bg-white shadow-2xl">
            <div className="pb-14 min-h-screen">{children}</div>
            <NavigationBar />
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}
