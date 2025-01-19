import Image from 'next/image'
import { Container } from './Container'
import Cleaning from '@/images/cleaning-about.jpg'

export const About = () => {
  return (
    <Container className="mx-0 max-w-none bg-white md:py-24" id="about">
      <div>
        <div className="relative pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative z-10 lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 pb-10 lg:px-8 lg:py-32 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
                  <h1 className="leading-12 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    About Bio-Dika Nettoyage
                  </h1>
                  <p className="text-md mt-6 font-display text-gray-600 sm:max-w-md sm:text-lg lg:max-w-none">
                    More people are now concerned not only about cleanliness at
                    home but also about safety during the cleaning process. Our
                    cleaning company introduces a novelty in the cleaning
                    services market - eco-cleaning of premises and
                    environmentally friendly cleaning of various surfaces, in
                    general, eco-friendly cleaning.
                  </p>

                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/register"
                      className="text-sm font-semibold leading-6 text-green-600"
                    >
                      Get a quote <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="aspect-[3/2] w-full object-cover lg:h-full"
              src={Cleaning}
              alt="Cleaning"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
