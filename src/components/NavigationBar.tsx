'use client'

import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function NavigationBar() {
  return (
    <div className="fixed left-0 bottom-0 overflow-hidden w-full h-14 border-t border-t-gray-200 grid grid-cols-3 items-center py-2 bg-white">
      <Link href="/" className="flex flex-col items-center text-xl">
        <EditIcon />
        <span className="text-[0.8rem]">벌금</span>
      </Link>
      <Link href="/" className="flex flex-col items-center text-xl">
        <CalendarIcon />
        <span className="text-[0.8rem]">갓생 채우기</span>
      </Link>
      <Link href="/" className="flex flex-col items-center text-xl">
        <AtSignIcon />
        <span className="text-[0.8rem]">프로필</span>
      </Link>
    </div>
  )
}
