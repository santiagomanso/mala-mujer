import Image from 'next/image'
import React from 'react'
import imgVertical from '../assets/yellow_2.jpeg'
import imgHorizontal from '../assets/yellow_3.jpeg'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='relative'>
      <h1 className='capitalize font-bold text-[10rem] -ml-3 font-gwenTrialBlack'>
        mala mujer
      </h1>
      <p className='w-2/3 text-2xl font-aleoLight'>
        graphic design // art direction // ux/ui // motion graphics // 3D
      </p>
      <button className='burger'></button>
      <Image
        src={imgVertical}
        alt='flower'
        className='absolute -top-28 right-0 w-1/4 rounded-2xl'
      />
      <Image
        src={imgHorizontal}
        alt='flower'
        className='absolute top-60 right-40 w-1/3 rounded-2xl'
      />
    </div>
  )
}

export default Hero
