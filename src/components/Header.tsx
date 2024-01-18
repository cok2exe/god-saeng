import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type HeaderProps = {
  left?: ReactNode
  title?: string
  right?: ReactNode
}

export default function Header({ left, title, right }: HeaderProps) {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-14 border-b border-b-gray-200 bg-white flex items-center justify-around">
      {left && <div className="absolute z-[1] left-5">{left}</div>}

      {title && <Heading size="sm">{title}</Heading>}

      {right && <div className="absolute z-[1] right-5">{right}</div>}
    </div>
  )
}
