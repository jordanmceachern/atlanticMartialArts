import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

type ScheduleTimesProps = {
  isBannerWidth?: boolean
}

const ScheduleTimes = ({ isBannerWidth }: ScheduleTimesProps) => (
  <div
    className={`flex flex-col h-full grow items-center justify-center rounded-lg`}
    style={{
      background:
        'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1696165783/turny_kick_j5zrst.jpg)',
    }}
  >
    <ul
      aria-label='class schedule'
      className={`flex flex-col bg-black/50 w-full p-4 ${isBannerWidth ? 'md:w-4/5 lg:w-3/4 xl:w-1/2 mx-16 sm:mx-0 rounded-none md:rounded-lg' : 'h-full pt-auto rounded-lg'} items-start text-white`}
    >
      <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1'>SCHEDULE</h2>
      <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        TAE KWON DO <div className='whitespace-normal ml-8 flex grow justify-end text-end'>Mon/Wed/Fri: Kids (ages 5-12) 6-7pm / Adults 7:15-8:15pm</div>
      </li>
      <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        HAP KI DO <div className='whitespace-normal ml-8 flex grow justify-end text-end'>(ages 13+) Tues/Thu:  6-7:30pm</div>
      </li>
      <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        KICK BOXING <div className='whitespace-normal ml-8 flex grow justify-end text-end'>Mon/Wed/Fri: 8:30-9:30pm*</div>
      </li>
      <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        TODDLER'S CLASS <div className='whitespace-normal ml-8 flex grow justify-end text-end'>Sat: 11am-12pm*</div>
      </li>
      <li className='whitespace-nowrap text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        WEAPONS TRAINING <div className='whitespace-normal ml-8 flex grow justify-end text-end'>Sat: 12:30pm-1:30pm*</div>
      </li>
      <li className='mt-1 text-xs sm:text-sm md:text-md w-full justify-end flex flex-nowrap'>
        [subject to change]*
      </li>
    </ul>
  </div>
)

export const ScheduleTimesLazy = (props?: ScheduleTimesProps) => (
  <Suspense fallback={<LoadingSpinner />}>
    <ScheduleTimes {...props} />
  </Suspense>
)

const ScheduleContent = () => (
  <div className='h-72 sm:h-96 bg-black rounded-lg flex justify-center w-full my-4 sm:my-16'>
    <div className='flex h-full w-full sm:w-3/4'>
      <ScheduleTimes isBannerWidth />
    </div>
  </div>
);

export const ScheduleContentLazy = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <ScheduleContent />
  </Suspense>
)

export default ScheduleContentLazy;