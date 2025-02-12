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
      'We cover all areas in and around Northwest, including Salford, Altrincham, Didsbury, and Stockport. Not sure if we can reach you? Just give us a call!',
  },
  {
    question: "How do you handle Northwest's rainy weather during a clean?",
    answer:
      "Rain doesn't stop us! We'll adjust our schedule as needed to ensure you get the best results.",
  },
  {
    question: 'Can I book multiple services at once?',
    answer:
      'Absolutely! Many of our Northwest customers book a roof and driveway clean together. Ask us about bundle discounts!',
  },
]

export default function FAQ() {
  return (
    <div className="bg-white">
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
