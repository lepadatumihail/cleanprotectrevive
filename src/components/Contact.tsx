'use client'

import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Container } from '@/components/Container'
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const inputClassName =
  'mt-1 block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm'
const labelClassName = 'block text-sm font-medium leading-6 text-gray-900'

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      number: formData.get('number'),
      notes: formData.get('notes'),
    }

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSuccess(true)
      setTimeout(() => {
        // Reset states after some time
        setTimeout(() => {
          setIsSuccess(false)
          setIsLoading(false)
        }, 300)
      }, 2000)
    } catch (error) {
      setError('Failed to submit form. Please try again.')
      setIsLoading(false)
    }
  }

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
                SIREN: 979938255
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
          <div className="relative bg-transparent px-6 pb-24 pt-6 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {!isSuccess ? (
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Get Your Free Quote
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Fill in your details and we&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className={labelClassName}>
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          disabled={isLoading}
                          placeholder="John Smith"
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClassName}>
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          disabled={isLoading}
                          placeholder="john@example.com"
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="number" className={labelClassName}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="number"
                          id="number"
                          required
                          disabled={isLoading}
                          placeholder="+44 7700 900000"
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor="notes" className={labelClassName}>
                          Notes (optional)
                        </label>
                        <textarea
                          name="notes"
                          id="notes"
                          rows={3}
                          disabled={isLoading}
                          placeholder="Any specific requirements or questions?"
                          className={inputClassName}
                        />
                      </div>
                      {error && (
                        <p className="mt-2 text-sm text-red-600">{error}</p>
                      )}
                      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row-reverse sm:gap-4">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                        >
                          {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                        <button
                          type="button"
                          disabled={isLoading}
                          className="inline-flex w-full justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                          onClick={() => setIsSuccess(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <CheckCircleIcon
                    className="mx-auto h-12 w-12 text-green-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-2 text-base font-semibold text-gray-900">
                    Quote Request Submitted
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Thank you! We&apos;ll get back to you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Container className="pb-10">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75993.08981340958!2d-2.3058627091677537!3d53.47231928805906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sM%C3%A1nchester%2C%20Manchester%2C%20Reino%20Unido!5e0!3m2!1ses!2ses!4v1745427250161!5m2!1ses!2ses"
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
