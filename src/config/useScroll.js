import { useEffect } from 'react' // Import useEffect
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScrollInView = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (view) {
      controls.start('show')
    }
  }, [controls, view]) // Make sure to include controls and view in the dependency array

  return [element, controls]
}

export const ScrollReveal = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
}
