import React, { useState } from 'react'
import Image from 'next/image'

import { members } from '@/data/members'
import { Button } from './ui/button'

type Props = {}

const About = (props: Props) => {
  // Initialize an array of active states for each card
  const [activeStates, setActiveStates] = useState<boolean[]>(
    members.map(() => false),
  )

  // Function to toggle the active state of a specific card
  function toggleActive(index: number) {
    const newActiveStates = activeStates.map((_, i) =>
      i === index ? !activeStates[i] : false,
    )
    setActiveStates(newActiveStates)
  }

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
              return (
                <article
                  key={item.id}
                  onClick={() => toggleActive(item.id)}
                  className='relative h-[100px] w-full group hover:cursor-pointer'
                >
                  <Image
                    alt={item.name}
                    src={item.image}
                    className='rounded-2xl w-full h-[250px] object-top object-cover group-hover:outline-8 group-hover:cursor-pointer group-hover:outline group-hover:outline-pink-300'
                  />
                  <h3 className='text-lg mt-2'>{item.name}</h3>
                  <h2 className='text-2xl font-black mb-3'>{item.title}</h2>
                  <p
                    className={`text-sm
                  ${
                    activeStates[item.id]
                      ? 'scale-100 transition-all duration-100'
                      : 'scale-0'
                  }`}
                  >
                    {item.desc}
                  </p>
                </article>
              )
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
