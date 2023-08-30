import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <section
        id='home'
        className='h-screen flex justify-center items-center mainBackground'
      >
        <article className='w-3/4 h-3/4 flex flex-col gap-40'>
          <Navbar />
          <Hero />
        </article>
      </section>
      <section
        id='about'
        className='h-screen bg-gradient-to-tr from-slate-300 to-gray-800'
      ></section>
    </main>
  )
}
