'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

interface TimeSlot {
  name: string
  description: string | null
  start: string
  end: string
}

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: TimeSlot[]
}

const schedule: Day[] = [
  {
    date: 'Monday',
    dateTime: '2023-07-03',
    summary: 'Regular cleaning services for homes and offices.',
    timeSlots: [
      {
        name: 'Morning Slot',
        description: 'Residential Cleaning',
        start: '8:00AM',
        end: '12:00PM',
      },
      {
        name: 'Afternoon Slot',
        description: 'Office Cleaning',
        start: '1:00PM',
        end: '5:00PM',
      },
    ],
  },
  {
    date: 'Tuesday',
    dateTime: '2023-07-04',
    summary: 'Deep cleaning and specialized services.',
    timeSlots: [
      {
        name: 'Morning Slot',
        description: 'Deep Cleaning',
        start: '8:00AM',
        end: '12:00PM',
      },
      {
        name: 'Afternoon Slot',
        description: 'Carpet Cleaning',
        start: '1:00PM',
        end: '5:00PM',
      },
    ],
  },
  {
    date: 'Wednesday',
    dateTime: '2023-07-05',
    summary: 'Eco-friendly cleaning and window services.',
    timeSlots: [
      {
        name: 'Morning Slot',
        description: 'Eco-Friendly Cleaning',
        start: '8:00AM',
        end: '12:00PM',
      },
      {
        name: 'Afternoon Slot',
        description: 'Window Cleaning',
        start: '1:00PM',
        end: '5:00PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  const [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    const smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-gray-700">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-gray-600">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ul
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-gray-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} for ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-green-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-gray-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-gray-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}`}>
              {timeSlot.end}
            </time>
          </p>
        </li>
      ))}
    </ul>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-10 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-gray-700">
            Our Weekly Cleaning Schedule
          </h2>
          <p className="mt-4 font-display text-lg tracking-tight text-gray-600">
            We offer a variety of cleaning services throughout the week. Check
            our schedule to find the perfect time for your cleaning needs.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative font-display">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
