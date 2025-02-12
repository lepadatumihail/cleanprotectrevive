'use client'

import Image from 'next/image'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image1 from '@/images/dropbox/comb2.jpeg'
import Image2 from '@/images/dropbox/6.jpg'
import Image3 from '@/images/dropbox/7.jpg'
import Image4 from '@/images/dropbox/comb1.jpeg'
import Image5 from '@/images/dropbox/comb3.jpeg'
import { Container } from '@/components/Container'

export function Carousel() {
  return (
    <div className="bg-gradient-to-t from-blue-50 via-blue-100/50 to-white py-14">
      <Container>
        <h2 className="text-center font-display text-4xl font-medium tracking-tighter text-blue-700 sm:text-4xl">
          View Our Previous Work
        </h2>
        <p className="text-md mt-4 text-center font-display leading-7 text-gray-600 sm:text-lg">
          Take a look at some examples of our work across Northwest. These
          projects showcase our commitment to quality and attention to detail.
        </p>

        <div className="mt-14">
          <ResponsiveCarousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            // autoPlay={true}
            interval={5000}
            className="relative mx-auto w-full max-w-5xl"
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <button
                  type="button"
                  onClick={clickHandler}
                  className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-black/40 p-3 text-white hover:bg-black/50"
                  style={{ left: 15 }}
                >
                  &#8592;
                </button>
              )
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <button
                  type="button"
                  onClick={clickHandler}
                  className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-black/40 p-3 text-white hover:bg-black/50"
                  style={{ right: 15 }}
                >
                  &#8594;
                </button>
              )
            }}
          >
            <div>
              <Image
                src={Image1}
                className="max-h-[600px] rounded-lg object-cover"
                alt="Carousel image 1"
                width={800}
                height={400}
              />
            </div>
            <div>
              <Image
                src={Image2}
                className="max-h-[600px] rounded-lg object-cover"
                alt="Carousel image 2"
                width={1800}
                height={1200}
              />
            </div>
            <div>
              <Image
                src={Image3}
                className="max-h-[600px] rounded-lg object-cover"
                alt="Carousel image 3"
                width={800}
                height={400}
              />
            </div>
            <div>
              <Image
                src={Image4}
                className="max-h-[600px] rounded-lg object-cover"
                alt="Carousel image 4"
                width={800}
                height={400}
              />
            </div>
            <div>
              <Image
                src={Image5}
                className="max-h-[600px] rounded-lg object-cover"
                alt="Carousel image 5"
                width={800}
                height={400}
              />
            </div>
          </ResponsiveCarousel>
        </div>
      </Container>
    </div>
  )
}
