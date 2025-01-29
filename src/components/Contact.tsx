'use client'

import { BuildingOffice2Icon, PhoneIcon } from '@heroicons/react/24/outline'
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Container } from '@/components/Container'

export const Contact = () => {
  return (
    <section id="contact">
      <div className="relative isolate bg-gray-50 font-display ring-1 ring-gray-900/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-xl">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_bottom_right,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    fill="white"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                    <title>Decorative background pattern</title>
                  </svg>
                  <rect
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                S.A.R.L. &quot;Clean Protect Revive&quot;
                <br />
                SIRET: 97993825500010
                <br />
                SIREN:979938255
              </p>
              <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">WhatsApp</span>
                    <WhatsappLogo
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                      weight="fill"
                    />
                  </dt>
                  <dd>
                    <a
                      href="https://wa.me/447518174643"
                      className="hover:text-gray-900"
                    >
                      +447518174643
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Instagram</span>
                    <InstagramLogo
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                      weight="fill"
                    />
                  </dt>
                  <dd>
                    <a
                      href="https://www.instagram.com/cleanprotectrevive/"
                      className="hover:text-gray-900"
                    >
                      @cleanprotectrevive
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Facebook</span>
                    <FacebookLogo
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                      weight="fill"
                    />
                  </dt>
                  <dd>
                    <a
                      href="https://www.facebook.com/profile.php?id=61567080843249"
                      className="hover:text-gray-900"
                    >
                      Clean Protect Revive
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-6 lg:px-8 lg:pt-32"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
        <Container className="pb-10">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5769.007540630741!2d7.25042467653867!3d43.70007884939707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd01192899727%3A0xa2641f1a135746f0!2s3%20Rue%20P%C3%A8re%20Auguste%20Valensin%2C%2006000%20Nice%2C%20Fran%C5%A3a!5e0!3m2!1sro!2ses!4v1729211084928!5m2!1sro!2ses"
              width="100%"
              height="600"
              title="Mpas"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </div>
    </section>
  )
}
