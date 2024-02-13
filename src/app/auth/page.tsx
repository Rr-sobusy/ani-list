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
    const formData = new FormData(e.currentTarget)
    const name = formData.get("username")
    const password = formData.get("password")
    console.log(name)
  }
  return (
    <form onSubmit={submitHandler} className='flex items-center justify-center h-screen bg-[#F3F4F6]'>
      <Card className='lg:w-1/3 md:w-3/4 flex flex-col gap-5 w-full h-full md:h-[550px] px-6 py-20 md:py-8 rounded-xl'>
        <div className='flex flex-col items-center'>
          <h2 className='scroll-m-20 text-2xl text-primary font-extrabold tracking-tight lg:text-3xl'><span className='text-[#E11D48] mr-1'>Ani</span>list</h2>
          <h6 className='font-sans text-gray-600 font-semibold tracking-wider'>Enter your username and password to login</h6>
        </div>

        {/* Input fields */}
        <div className='flex mt-3 flex-col gap-2'>
          <label className='text-slate-700 text-lg font-semibold tracking-tight scroll-m-20'>Username</label>
          <Input name='username' className='py-6 text-sm text-slate-700' placeholder='Enter your username' />
          <label className='text-slate-700 text-lg font-semibold tracking-tight scroll-m-20'>Password</label>
          <Input name='password' className='py-6 text-sm text-slate-700' placeholder='Enter your password' />
        </div>
        <Button type='submit' className='py-6'>Login</Button>
        <h5 className='font-sans text-slate-500 font-semibold text-sm'>Or login with</h5>

      </Card>
    </form>
  )
}

export default LoginPage