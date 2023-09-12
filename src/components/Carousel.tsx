import React from 'react';

// Built this using example code from: https://flowbite.com/docs/components/carousel/#:~:text=The%20carousel%20component%20can%20be,the%20JavaScript%20object%20from%20Flowbite.
export const Carousel = () => (
  <div className='mx-2 sm:mx-16'>
    <div id='default-carousel' className='relative w-full' data-carousel='slide'>
      {/* Carousel wrapper */}
      <div className='relative h-60 overflow-hidden rounded-lg sm:h-96'>
        {/* Item 1 */}
        <div className='duration-1000 ease-in-out h-full w-full' data-carousel-item>
          <div
            aria-label='Photo of School'
            className='h-full w-full'
            style={{
              background:
                'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694544887/dojo_vdhf6m.jpg)',
            }}
          >
            <div className='inset-0 h-full w-full flex items-center justify-center'>
              <div style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }} className='flex flex-col items-center px-3 py-2 rounded-lg text-white'>
                <span>We are currently still renovating some parts of our space,</span>
                <span>but class operation is not affected: <strong className='px-2 py-px hover:underline cursor-pointer' data-carousel-next>see schedule</strong></span>
              </div>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className='duration-1000 ease-in-out h-full w-full bg-black flex justify-center' data-carousel-item>
          <div
            aria-label='Photo of young Master Ross'
            className='h-full w-full sm:w-3/4 md:w-1/2'
            style={{
              background:
                'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/v1694555642/turny_kick_ibwvub.jpg)',
            }}
          >
            <div className='inset-0 h-full w-3/4 sm:w-full flex items-center justify-center'>
              <ul
                aria-label='class schedule'
                style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }}
                className='flex flex-col items-start px-3 py-2 rounded-lg text-white'
              >
                <li className='text-xs sm:text-sm w-full justify-between flex'>
                  HAPKIDO - <span>(ages 13+) Tues/Thu:  6-7pm, Sat: 2:30-3:30pm</span>
                </li>
                <li className='text-xs sm:text-sm w-full justify-between flex'>
                  TAEKWONDO - <span>Mon/Wed/Fri: Kids (ages 5-12) 6-7pm / Adults 7:30-8:30pm</span>
                </li>
                <li className='text-xs sm:text-sm w-full justify-between flex'>
                  KICKBOXING - <span>Tues/Thu: 7:30-8:30pm, Sat: 4-5pm *</span>
                </li>
                <li className='text-xs sm:text-sm w-full justify-between flex'>
                  TODDLER'S CLASS - <span>Sat: 11:30am-12:30pm *</span>
                </li>
                <li className='text-xs sm:text-sm w-full justify-between flex'>
                  WEAPONS TRAINING - <span>Sat: 1pm-2pm *</span>
                </li>
                <li className='text-xs sm:text-sm w-full justify-between flex'>
                  * - [subject to change]
                </li>
              </ul>
            </div>
          </div>
          {/* <iframe
            className='h-full w-full'
            src='https://www.youtube.com/embed/vRKZLQS4IDk?si=ME0lj9xIsU170iP0'
            title='YouTube video player 2'
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe> */}
        </div>
      </div>
      {/* Slider indicators */}
      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        <button type='button' className='w-3 h-3 rounded-full' aria-current='true' aria-label='Slide 1' data-carousel-slide-to='0'></button>
        <button type='button' className='w-3 h-3 rounded-full' aria-current='false' aria-label='Slide 2' data-carousel-slide-to='1'></button>
      </div>
      {/* Slider controls */}
      <button type='button' className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-prev>
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg className='w-4 h-4 text-white dark:text-gray-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 1 1 5l4 4' />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button type='button' className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-next>
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg className='w-4 h-4 text-white dark:text-gray-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 9 4-4-4-4' />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  </div>
);

export default Carousel;
