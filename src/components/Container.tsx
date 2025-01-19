//@ts-nocheck
'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ScrollReveal, useScrollInView } from '@/config/useScroll'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [element, controls] = useScrollInView()
  return (
    <motion.div
      variants={ScrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
