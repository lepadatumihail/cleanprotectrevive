export default function CTA() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between">
        <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Let Clean Protect Revive transform your Manchester home
          {/* Start your free trial today. */}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="/register"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Request a Free Quote Now
          </a>
        </div>
      </div>
    </div>
  )
}
