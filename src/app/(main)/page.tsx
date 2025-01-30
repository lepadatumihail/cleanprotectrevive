import { About } from '@/components/About'
import { Carousel } from '@/components/Carousel'
import { Contact } from '@/components/Contact'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { Features } from '@/components/Features'
import { HeroTW } from '@/components/HeroTW'
import { Schedule } from '@/components/Schedule'
import { Services } from '@/components/Services'
import { Sponsors } from '@/components/Sponsors'
import Image from 'next/image'
import Whatsapp from '@/images/whatsapp.svg'
import { InstagramFeed } from '@/components/InstagramFeed'

export default function Home() {
  return (
    <>
      <HeroTW />
      <About />
      <InstagramFeed />
      {/* <Features /> */}
      {/* <Hero /> */}
      <CTA />
      <Services />
      <Carousel />
      <Schedule />
      <FAQ />
      {/* <Sponsors /> */}
      <Contact />
      <a
        href="https://wa.me/447518174643"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={Whatsapp}
          alt="Whatsapp"
          width={50}
          height={50}
          className="fixed bottom-10 right-10 hover:scale-110 transition-transform"
        />
      </a>
      {/* <Newsletter /> */}
    </>
  )
}
