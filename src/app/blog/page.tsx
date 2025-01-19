import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import Link from 'next/link'

import Service1 from '@/images/services/services1.webp'
import Service2 from '@/images/services/services2.webp'
import Service3 from '@/images/services/services3.webp'
import Service4 from '@/images/services/services4.webp'
import Service5 from '@/images/services/services5.webp'
import Service6 from '@/images/services/services6.webp'
import Image from 'next/image'
import { Contact } from '@/components/Contact'

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Eco-Friendly Cleaning',
    excerpt:
      'Discover how green cleaning can improve your health and the environment.',
    date: '2023-06-01',
    image: Service1,
  },
  {
    id: 2,
    title: 'Top 5 Natural Cleaning Solutions',
    excerpt:
      'Learn about effective, non-toxic alternatives to harsh chemical cleaners.',
    date: '2023-05-15',
    image: Service2,
  },
  {
    id: 3,
    title: 'How to Maintain a Clean Home Sustainably',
    excerpt:
      'Tips and tricks for keeping your living space clean without harming the planet.',
    date: '2023-04-28',
    image: Service3,
  },
  {
    id: 4,
    title: 'The Impact of Professional Cleaning on Workplace Productivity',
    excerpt:
      'Explore how a clean work environment can boost employee efficiency and morale.',
    date: '2023-03-20',
    image: Service4,
  },
  {
    id: 5,
    title: 'Seasonal Cleaning Guide: Preparing Your Home for Summer',
    excerpt:
      'A comprehensive checklist to ensure your home is fresh and ready for the warm months.',
    date: '2023-02-15',
    image: Service5,
  },
  {
    id: 6,
    title: 'The Future of Cleaning Technology',
    excerpt:
      'Discover upcoming innovations that are set to revolutionize the cleaning industry.',
    date: '2023-01-10',
    image: Service6,
  },
]

export default function Home() {
  return (
    <Layout>
      <Container className="my-16 font-display sm:my-32">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Blog
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Stay updated with the latest news, tips, and insights about
          eco-friendly cleaning.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mt-20 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col gap-8"
            >
              <div className="relative aspect-[3/2] sm:aspect-[3/2]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="absolute inset-0 rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <Contact />
    </Layout>
  )
}
