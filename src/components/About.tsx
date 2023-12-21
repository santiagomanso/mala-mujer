import React from 'react'

import { members } from '@/data/members'
import Card from './Card'

const About = () => {
  return (
    <section id='about' className='h-screen w-full flex flex-col'>
      <article className='relative h-1/3 gap-5 flex justify-center items-center'>
        {/* <Image alt='splash' src={splash} /> */}
        <div className='flex flex-col h-1/2 justify-start gap-10'>
          <p className='text-3xl font-aleoLight font-semibold'>
            whatwecandoforyou//
          </p>
          <ul className='flex flex-col gap-2 font-aleoLight text-xl'>
            <li className='underline text-emerald-500 font-semibold'>
              branding packages
            </li>
            <li>UX/UI packages</li>
            <li>motion graphics packages</li>
            <li>3D packages</li>
          </ul>
        </div>
      </article>
      <article className='h-2/3 relative overflow-hidden'>
        <div className='flex gap-2 ml-32 mb-20 items-center '>
          {/* <Image alt='splash' src={splash} className='w-[50px] h-[50px]' /> */}
          <p className='text-3xl font-aleoLight font-semibold'>theteam//</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 px-28 gap-20 mt-10   font-aleoLight'>
          {members &&
            members.map((item) => {
              return <Card item={item} key={item.id} />
            })}
        </div>
        <p className='font-aleoLight font-semibold text-4xl text-pink-300 text-center absolute bottom-5 tracking-widest'>
          from//the//roots//to//the//seed//to//the//branch//to//the//flower//to//the//dirt//to//the//leaf
        </p>
      </article>
    </section>
  )
}

export default About
