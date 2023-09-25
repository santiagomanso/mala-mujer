import Intro from '@/components/Intro'
import About from '@/components/About'
import Branding from '@/components/Branding'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <Intro />
      <About />
      <Branding />
      <Footer />
    </main>
  )
}
