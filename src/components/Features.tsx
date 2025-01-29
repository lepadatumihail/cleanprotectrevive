import {
  SparklesIcon,
  UserGroupIcon,
  HeartIcon,
  ArrowPathRoundedSquareIcon,
  HomeIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'
import { Container } from './Container'

const features = [
  {
    name: 'People with allergies',
    description:
      'Our eco-friendly cleaning services are ideal for people suffering from allergies or those predisposed to them, ensuring a safe and allergen-free environment.',
    icon: SparklesIcon,
  },
  {
    name: 'Children of any age',
    description:
      'We prioritize the safety of children by using non-toxic, eco-friendly cleaning products that are gentle yet effective, suitable for homes with kids of all ages.',
    icon: UserGroupIcon,
  },
  {
    name: 'Pregnant women',
    description:
      'Our services are particularly beneficial for pregnant women, as we use safe, chemical-free cleaning methods that protect both mother and baby.',
    icon: HeartIcon,
  },
  {
    name: 'Homes with pets',
    description:
      'Pet-friendly cleaning solutions ensure your furry friends stay safe while we maintain a clean and hygienic living space for the whole family.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Country houses',
    description:
      'For country houses with their own wastewater systems, our eco-friendly approach ensures minimal environmental impact while maintaining cleanliness.',
    icon: HomeIcon,
  },
  {
    name: 'Health and eco-conscious',
    description:
      'Perfect for anyone who cares about their health and the environment, our services promote a clean home and a cleaner planet.',
    icon: NewspaperIcon,
  },
]

export const Features = () => {
  return (
    <Container>
      <div className="bg-white pt-24 font-display sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center">
            <h2 className="text-lg font-semibold leading-7 text-blue-600">
              Green Cleaning
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Eco-cleaning is a new but actively developing direction in
              ecological professional cleaning
            </p>
            <p className="text-md mt-6 break-words break-all leading-7 text-gray-600 sm:text-lg">
              The main principle of GreenCleaning is the use of cleaning
              products, tools, and equipment in accordance with EU standards.
              Eco-cleaning involves using a{' '}
              <span className="font-bold">steam generator</span> and special{' '}
              <span className="font-bold">
                biodegradable phosphate-free agents
              </span>{' '}
              based on organic compounds, safe for people and animals.
              Eco-cleaning and eco-cleaning are beneficial and safe for anyone,
              but we especially <span className="font-bold">recommend</span>{' '}
              them to the following categories:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    <p className="text-lg font-medium">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Container>
  )
}
