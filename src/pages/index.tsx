import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'

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
          <a
            href='#about'
            className='font-aleoLight absolute bottom-8 right-1/2 translate-x-1/2 text-2xl'
          >
            scroll down
          </a>
        </article>
      </section>
      <section id='about' className='h-screen flex flex-col'>
        <About />
      </section>
    </main>
  )
}
