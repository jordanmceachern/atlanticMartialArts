import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

const ScheduleContent = () => (
  <div className='h-72 sm:h-96 bg-black rounded-lg flex justify-center w-full'>
    <div
      aria-label='Photo of young Master Ross'
      className='flex h-full w-full sm:w-3/4 md:w-1/2'
      style={{
        background:
          'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/v1694555642/turny_kick_ibwvub.jpg)',
      }}
    >
      <div className='inset-0 h-full w-full flex items-center justify-center'>
        <ul
          aria-label='class schedule'
          style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }}
          className='flex flex-col w-full md:w-4/5 lg:w-3/4 xl:w-1/2 mx-16 sm:mx-0 items-start px-3 py-2 rounded-lg text-white'
        >
          <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1'>SCHEDULE</h2>
          <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
            HAPKIDO <div className='ml-8 flex grow justify-end text-end'>(ages 13+) Tues/Thu:  6-7pm, Sat: 2:30-3:30pm</div>
          </li>
          <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
            TAEKWONDO <div className='ml-8 flex grow justify-end text-end'>Mon/Wed/Fri: Kids (ages 5-12) 6-7pm / Adults 7:30-8:30pm</div>
          </li>
          <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
            KICKBOXING <div className='ml-8 flex grow justify-end text-end'>Tues/Thu: 7:30-8:30pm, Sat: 4-5pm*</div>
          </li>
          <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
            TODDLER'S CLASS <div className='ml-8 flex grow justify-end text-end'>Sat: 11:30am-12:30pm*</div>
          </li>
          <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
            WEAPONS TRAINING <div className='ml-8 flex grow justify-end text-end'>Sat: 1pm-2pm*</div>
          </li>
          <li className='mt-1 text-xs sm:text-sm md:text-md w-full justify-end flex flex-nowrap'>
            [subject to change] *
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const Schedule = () => (
  <div className='flex justify-center m-2 sm:m-16 '>
    <Suspense fallback={<LoadingSpinner />}>
      <ScheduleContent />
    </Suspense>
  </div>
)

export default Schedule;