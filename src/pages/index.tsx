import Image from 'next/image'
import imgVertical from '../assets/yellow_2.jpeg'
import imgHorizontal from '../assets/yellow_3.jpeg'
import bg from '../assets/background_take2.png'

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <section id='home' className='h-screen flex justify-center items-center'>
        <Image
          src={bg}
          alt='Background'
          layout='fill'
          objectFit='cover'
          priority
        />
        <article className='w-3/4 h-3/4 flex flex-col gap-40'>
          <nav className='flex justify-between'>
            <a href='#home' className='text-2xl'>
              Est. 2023
            </a>
            <div className='flex gap-2 text-2xl'>
              <p>english //</p>
              <p>español //</p>
              <p>deutsch</p>
            </div>
          </nav>
          <div className='relative'>
            <h1 className='capitalize font-bold text-[10rem] -ml-3'>
              mala mujer
            </h1>
            <p className='w-2/3 text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className='px-3 py-2 border-2 border-gray-400 rounded-lg mt-5'>
              Lorem
            </button>
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
        </article>
      </section>
      <section
        id='about'
        className='h-screen bg-gradient-to-tr from-slate-300 to-gray-800'
      ></section>
    </main>
  )
}
