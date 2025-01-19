import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Features } from '@/components/Features'
import { HeroTW } from '@/components/HeroTW'
import { Schedule } from '@/components/Schedule'
import { Services } from '@/components/Services'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <HeroTW />
      <About />
      <Features />
      {/* <Hero /> */}
      <Services />
      <Schedule />
      <Sponsors />
      <Contact />
      {/* <Newsletter /> */}
    </>
  )
}
