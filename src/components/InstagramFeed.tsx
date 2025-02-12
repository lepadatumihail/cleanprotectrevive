'use client'

import { useState, useEffect } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import { Container } from './Container'

export const InstagramFeed = () => {
  const [mounted, setMounted] = useState(false)

  const posts = [
    'https://www.instagram.com/reel/DFSYH_Ft5i-/',
    'https://www.instagram.com/p/DDXefJbtm8z/',
    'https://www.instagram.com/p/DCO9ScqN4EP/',
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl px-4 lg:mx-0">
          <h2 className="font-display text-3xl font-medium tracking-tighter text-gray-700 sm:text-4xl">
            Latest Work
          </h2>
          <p className="text-md mt-4 font-display leading-7 text-gray-600 sm:text-lg">
            Check out our recent transformations and projects across Northwest
          </p>
        </div>
        <div className="relative mt-8 px-4 sm:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {posts.map((url) => (
              <div key={url} className="flex justify-center">
                <InstagramEmbed
                  url={url}
                  width={Math.min(328, window.innerWidth - 40)}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
