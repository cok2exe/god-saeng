'use client'

import { Input } from '@chakra-ui/input'
import { Button, Stack, useToast } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const nicknameSchema = z.object({
  nickname: z.string(),
})

type NicknameFormType = z.infer<typeof nicknameSchema>

export default function NicknameSettingForm() {
  const { control, handleSubmit } = useForm<NicknameFormType>({
    resolver: zodResolver(nicknameSchema),
  })
  const router = useRouter()
  const toast = useToast()

  const onSubmit = ({ nickname }: NicknameFormType) => {
    localStorage.setItem('nickname', nickname)
    toast({
      title: '닉네임이 설정되었어요!',
      description: '꾸준한 기록을 통해 갓생을 살아보세요 :p',
      status: 'success',
    })

    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" className="p-16 rounded">
        <Controller
          defaultValue=""
          control={control}
          render={({ field: { ref, ...restField } }) => (
            <Input placeholder="닉네임" {...restField} />
          )}
          name="nickname"
        />

        <Button type="submit" colorScheme="purple">
          설정 :D
        </Button>
      </Stack>
    </form>
  )
}
