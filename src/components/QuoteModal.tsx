import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface QuoteModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const inputClassName =
  'mt-1 block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm'
const labelClassName = 'block text-sm font-medium leading-6 text-gray-900'

export const QuoteModal = ({ isOpen, setIsOpen }: QuoteModalProps) => {
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
        setIsOpen(false)
        // Reset states after modal is closed
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
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                {!isSuccess ? (
                  <>
                    <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-semibold leading-6 text-gray-900"
                        >
                          Get Your Free Quote
                        </Dialog.Title>
                        <p className="mt-2 text-sm text-gray-500">
                          Fill in your details and we&apos;ll get back to you as
                          soon as possible.
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
                              <label
                                htmlFor="number"
                                className={labelClassName}
                              >
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
                              <p className="mt-2 text-sm text-red-600">
                                {error}
                              </p>
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
                                onClick={() => setIsOpen(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
