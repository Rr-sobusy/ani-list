"use client"

import React from 'react'

// shadcn ui - designed component library
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

type Props = {}

const LoginPage = (props: Props) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={submitHandler} className='flex items-center justify-center h-screen bg-[#F3F4F6]'>
      <Card className='lg:w-1/3 md:w-3/4 flex flex-col gap-5 w-full h-full md:h-[650px] px-6 py-20 md:py-8 rounded-xl'>
        <div className='flex flex-col items-center'>
          <h2 className='scroll-m-20 text-2xl text-slate-800 font-extrabold tracking-tight lg:text-3xl'>Sign In</h2>
          <h6 className='font-sans text-gray-500 font-semibold tracking-wider'>Enter your username and password to login</h6>
        </div>

        {/* Input fields */}
        <div className='flex mt-3 flex-col gap-1 h-3/4'>
          <label className='text-slate-700 text-lg font-semibold tracking-tight scroll-m-20'>Username</label>
          <Input className='py-6' placeholder='Enter your username' />
          <label className='text-slate-700 text-lg font-semibold tracking-tight scroll-m-20'>Password</label>
          <Input className='py-6' placeholder='Enter your password' />
        </div>
        <Button type='submit' className=''>Login</Button>
      </Card>
    </form>
  )
}

export default LoginPage