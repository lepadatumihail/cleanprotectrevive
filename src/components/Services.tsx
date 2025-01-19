'use client'

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import Service1 from '@/images/services/services1.webp'
import Service2 from '@/images/services/services2.webp'
import Service3 from '@/images/services/services3.webp'
import Service4 from '@/images/services/services4.webp'
import Service5 from '@/images/services/services5.webp'
import Service6 from '@/images/services/services6.webp'
import Service7 from '@/images/services/services7.webp'
import Service8 from '@/images/services/services8.webp'
import { Container } from './Container'

const services = [
  {
    name: 'Residential Cleaning',
    description: 'Comprehensive cleaning for homes and apartments',
    image: Service1,
  },
  {
    name: 'ECO-Friendly Commercial Cleaning',
    description:
      'Environmentally consciousa and professional cleaning services for businesses',
    image: Service2,
  },
  {
    name: 'Deep Cleaning',
    description: 'Thorough cleaning for neglected or heavily soiled areas',
    image: Service3,
  },
  {
    name: 'Window Cleaning',
    description: 'Crystal clear windows for homes and offices',
    image: Service4,
  },
  {
    name: 'Carpet Cleaning',
    description: 'Deep carpet cleaning and stain removal',
    image: Service5,
  },

  {
    name: 'Construction and Movings  Cleaning',
    description: 'Thorough cleaning for property transitions',
    image: Service7,
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
            Explore our comprehensive range of professional cleaning services
            designed to meet all your needs. From residential to commercial
            spaces, we offer eco-friendly solutions that ensure a spotless,
            healthy environment. Our team of experienced professionals is
            committed to delivering exceptional results, using state-of-the-art
            equipment and environmentally conscious products.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-14 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, serviceIndex) => (
            <div key={service.name} className="relative">
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                <div
                  className={clsx(
                    'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                    ['border-gray-300', 'border-green-300', 'border-sky-300'][
                      serviceIndex % 3
                    ],
                  )}
                />
                <div
                  className="absolute inset-0 bg-green-50"
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
