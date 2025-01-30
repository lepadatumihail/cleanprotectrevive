'use client'

import { useState, useEffect } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import { Container } from './Container'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const InstagramFeed = () => {
  const [groupSize, setGroupSize] = useState(3)
  const [mounted, setMounted] = useState(false)

  const posts = [
    'https://www.instagram.com/reel/DFSYH_Ft5i-/',
    'https://www.instagram.com/reel/DFPTIP5Nz5t/', 
    'https://www.instagram.com/reel/DE5gTTrtmfE/',
    'https://www.instagram.com/p/DDXefJbtm8z/',
    'https://www.instagram.com/p/DCg_-_AtSQO/',
    'https://www.instagram.com/p/DCO9ScqN4EP/',
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setGroupSize(1) // Mobile
      else if (window.innerWidth < 1024) setGroupSize(2) // Tablet
      else setGroupSize(3) // Desktop
    }

    handleResize()
    setMounted(true)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const groupPosts = (posts: string[], size: number) => {
    return posts.reduce((acc, curr, i) => {
      if (i % size === 0) acc.push([])
      acc[Math.floor(i / size)].push(curr)
      return acc
    }, [] as string[][])
  }

  if (!mounted) return null

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl px-4 lg:mx-0">
          <h2 className="font-display text-3xl font-medium tracking-tighter text-gray-700 sm:text-4xl">
            Latest Work
          </h2>
          <p className="text-md mt-4 font-display leading-7 text-gray-600 sm:text-lg">
            Check out our recent transformations and projects across Manchester
          </p>
        </div>
        <div className="mt-8 sm:mt-16 relative px-4">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            className="instagram-carousel"
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <button
                  type="button"
                  onClick={clickHandler}
                  className="absolute left-0 top-1/2 z-50 -translate-y-1/2 rounded-xl bg-black/40 p-2 sm:p-3 text-white hover:bg-black/50"
                  style={{ left: 5 }}
                >
                  &#8592;
                </button>
              )
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <button
                  type="button"
                  onClick={clickHandler}
                  className="absolute right-0 top-1/2 z-50 -translate-y-1/2 rounded-xl bg-black/40 p-2 sm:p-3 text-white hover:bg-black/50"
                  style={{ right: 5 }}
                >
                  &#8594;
                </button>
              )
            }}
          >
            {groupPosts(posts, groupSize).map((group) => (
              <div key={group[0]} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {group.map((url) => (
                  <div key={url} className="flex justify-center">
                    <InstagramEmbed 
                      url={url}
                      width={Math.min(328, window.innerWidth - 40)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
