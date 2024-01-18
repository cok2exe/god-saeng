import { Button, Checkbox, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import ko from 'dayjs/locale/ko'

import Header from '@/components/Header'

dayjs.locale(ko)

export default function Home() {
  return (
    <main className="pt-14 px-5">
      <Header title="🔥 갓생 채우기 🔥" right={<Button>+</Button>} />

      <div className="py-6">
        <Text align="center">{dayjs().format('YYYY.MM.DD dddd')}</Text>
      </div>

      <div className="flex flex-col">
        <Checkbox className="py-5">롤하기</Checkbox>
        <Checkbox className="py-5">밥먹기</Checkbox>
        <Checkbox className="py-5">T1 리딸</Checkbox>
        <Checkbox className="py-5">젠마카세</Checkbox>
      </div>
    </main>
  )
}
