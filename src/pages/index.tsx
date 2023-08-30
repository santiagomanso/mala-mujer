import Image from 'next/image'
import imgVertical from '../assets/yellow_2.jpeg'
import imgHorizontal from '../assets/yellow_3.jpeg'
import bg from '../assets/background_take2.png'

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <section
        id='home'
        className='h-screen flex justify-center items-center mainBackground'
      >
        <article className='w-3/4 h-3/4 flex flex-col gap-40'>
          <nav className='flex justify-between'>
            <a href='#home' className='text-2xl font-aleoLight'>
              Est. 2023
            </a>
            <div className='flex gap-2 text-2xl font-aleoLight'>
              <p>english //</p>
              <p>español //</p>
              <p>deutsch</p>
            </div>
          </nav>
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
        </article>
      </section>
      <section
        id='about'
        className='h-screen bg-gradient-to-tr from-slate-300 to-gray-800'
      ></section>
    </main>
  )
}
