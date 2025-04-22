'use client'

import { useState } from 'react'
import { QuoteModal } from './QuoteModal'

export default function CTA() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-gray-900">
          Let CPR bring your property back to life
          {/* Start your free trial today. */}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <button
            type="button"
            onClick={() => setIsQuoteModalOpen(true)}
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Request a Free Quote Now
          </button>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
    </div>
  )
}
