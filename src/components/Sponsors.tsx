import Image from 'next/image'

import { Container } from '@/components/Container'
import Miele from '@/images/sponsors/miele.webp'
import Karcher from '@/images/sponsors/karcher.webp'
import Unger from '@/images/sponsors/unger.webp'

const sponsors = [
  { name: 'Miele', logo: Miele },
  { name: 'Karcher', logo: Karcher },
  { name: 'Unger', logo: Unger },
  // { name: 'Statamic', logo: logoStatamic },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl">
          Our Inventory
        </h2>
        <p className="text-md mx-auto mt-8 max-w-5xl text-center font-display text-gray-600 sm:text-lg">
          Our selection of products are not only the highest quality, but are
          also available in a variety of options to ensure you find exactly what
          you’re looking for. Bio-Dika Nettoyage has a team of experts ready to
          provide support and advice for any questions or special requests you
          may have, so feel free to give us a call if you need.
        </p>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
