import Image from 'next/image'
import React from 'react'
import imgVertical from '../assets/yellow_2.jpeg'
import imgHorizontal from '../assets/yellow_3.jpeg'
import Navbar from './Navbar'
type Props = {}

const Intro = (props: Props) => {
  return (
    <div className='relative h-screen flex flex-col items-center justify-center mainBackground overflow-hidden '>
      <div className='relative w-full  lg:max-w-[110rem] xl:max-w-[100rem] h-[90%]'>
        <Navbar />
        <article className='flex flex-col mt-28 items-start w-full h-full'>
          <h1 className='capitalize font-extrabold text-[8rem]  font-gwenTrialBlack'>
            mala mujer
          </h1>
          <p className='w-2/3 text-2xl font-aleoLight'>
            graphic design // art direction // ux/ui // motion graphics // 3D
          </p>

          <Image
            src={imgVertical}
            alt='flower'
            className='absolute top-28 right-44 w-[23%] rounded-[2rem]'
          />
          <Image
            src={imgHorizontal}
            alt='flower'
            className='absolute bottom-20 right-[26%] w-1/4 rounded-[2rem]'
          />
          <a
            href='#about'
            className='font-aleoLight absolute bottom-0 left-1/2 -translate-x-1/2 text-xl'
          >
            scroll down
          </a>
        </article>
      </div>
    </div>
  )
}

export default Intro
