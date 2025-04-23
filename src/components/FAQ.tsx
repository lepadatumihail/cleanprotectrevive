'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
const faqs = [
  {
    question: 'Which areas in Northwest do you cover?',
    answer:
      'We proudly serve all areas throughout Northwest, including Salford, Altrincham, Didsbury, Stockport, and surrounding communities. If you are unsure whether we service your location, please contact us directly and we will be happy to assist you!',
  },
  {
    question: "How do you handle Northwest's rainy weather during a clean?",
    answer:
      "Northwest's weather won't compromise our service quality! We carefully monitor forecasts and adapt our scheduling accordingly. If rain occurs during your appointment, we'll either work through light precipitation with specialized equipment or reschedule at your convenience to ensure optimal results.",
  },
  {
    question: 'Can I book multiple services at once?',
    answer:
      'Absolutely! We encourage comprehensive cleaning packages. Many of our customers combine services like roof cleaning, driveway washing, and gutter clearing for maximum efficiency. We offer attractive bundle discounts that provide better value while saving you time. Contact us for a customized quote!',
  },
  {
    question: 'What cleaning methods do you use?',
    answer:
      'We utilize eco-friendly, high-efficiency cleaning solutions combined with state-of-the-art equipment. Our techniques are tailored to each surface type, ensuring thorough cleaning without causing damage. All our products are environmentally responsible and safe for your property.',
  },
  {
    question: 'How often should I schedule cleaning services?',
    answer:
      'The recommended frequency depends on your specific environment and property conditions. Most Northwest homeowners benefit from exterior cleaning every 12-18 months. We are happy to assess your property and suggest an optimal maintenance schedule to keep your home looking its best year-round.',
  },
]

export default function FAQ() {
  return (
    <div className="bg-white" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question}>
                {({ open }) => (
                  <div className="pt-6">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base/7 font-semibold">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-6 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-6 group-[&:not([data-open])]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <AnimatePresence>
                      {open && (
                        <DisclosurePanel
                          as={motion.dd}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition
                          className="mt-2 pr-12"
                        >
                          <p className="text-base/7 text-gray-600">
                            {faq.answer}
                          </p>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
