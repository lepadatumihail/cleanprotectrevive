'use client'

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import Service1 from '@/images/dropbox/1.jpg'
import Service2 from '@/images/dropbox/8.jpg'
import Service3 from '@/images/dropbox/3.jpg'
import Service4 from '@/images/dropbox/11.jpg'
import Service5 from '@/images/dropbox/5.jpg'
import { Container } from './Container'

const services = [
  {
    name: 'Jet Washing',
    description:
      "At Clean Protect Revive, we know Manchester's weather takes its toll on outdoor surfaces. That's why our jet washing service is designed to remove stubborn dirt, grime, and oil stains, leaving your driveway, patio, or walls looking as good as new.",
    image: Service1,
  },
  {
    name: 'Roof Cleaning',
    description:
      "Manchester's weather can lead to moss and algae buildup on your roof. Our roof cleaning service not only improves the appearance of your property but also protects your roof from long-term damage.",
    image: Service2,
  },
  {
    name: 'Gutter Cleaning & Maintenance',
    description:
      "Clogged gutters in Manchester? We're here to help. Clean Protect Revive will clear out leaves and debris, ensuring your gutters work perfectly, even in the rainiest months.",
    image: Service3,
  },
  {
    name: 'Solar Panel Cleaning',
    description:
      'Maximize your energy savings in Manchester with professionally cleaned solar panels. Clean Protect Revive ensures your panels are spotless and operating at peak efficiency.',
    image: Service4,
  },
  {
    name: 'Deck Cleaning',
    description:
      "From BBQ-ready decks in Didsbury to quiet garden spaces in Salford, we'll clean and revive your decking to its natural beauty, no matter where you are in Manchester.",
    image: Service5,
  },
]

export const Services = () => {
  const id = useId()

  return (
    <section id="services" aria-labelledby="services-title" className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="services-title"
            className="font-display text-4xl font-medium tracking-tighter text-gray-700 sm:text-4xl"
          >
            Our Services
          </h2>
          <p className="text-md mt-4 font-display leading-7 text-gray-600 sm:text-lg">
            From driveways to roofs, we handle it all. Our specialized cleaning
            and maintenance solutions tackle Manchester&apos;s toughest weather
            effects to keep your property looking its best—no matter the season.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-14 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, serviceIndex) => (
            <div key={service.name} className="relative">
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-xl">
                <div
                  className={clsx(
                    'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                    ['border-gray-300', 'border-blue-300', 'border-sky-300'][
                      serviceIndex % 3
                    ],
                  )}
                />
                <div
                  className="absolute inset-0 bg-blue-50"
                  style={{ clipPath: `url(#${id}-${serviceIndex % 3})` }}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    src={service.image}
                    alt={service.name}
                    priority
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                {service.name}
              </h3>
              <p className="mt-1 font-display text-base tracking-tight text-slate-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
