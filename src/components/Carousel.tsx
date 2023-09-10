import React from 'react';

// Built this using example code from: https://flowbite.com/docs/components/carousel/#:~:text=The%20carousel%20component%20can%20be,the%20JavaScript%20object%20from%20Flowbite.
export const Carousel = () => (
  <div className='mx-2 sm:mx-16'>
    <div id='default-carousel' className='relative w-full' data-carousel='static'>
      {/* Carousel wrapper */}
      <div className='relative h-60 overflow-hidden rounded-lg sm:h-96'>
        {/* Item 1 */}
        <div className='hidden duration-1000 ease-in-out h-full w-full' data-carousel-item>
          <iframe
            className='h-full w-full'
            src='https://www.youtube.com/embed/TKEbws4QhEk?si=pFAPDG0EJpce5Sgh&autoplay=1'
            title='YouTube video player 1'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </div>
        {/* Item 2 */}
        <div className='hidden duration-1000 ease-in-out h-full w-full' data-carousel-item>
          <iframe
            className='h-full w-full'
            src='https://www.youtube.com/embed/vRKZLQS4IDk?si=ME0lj9xIsU170iP0'
            title='YouTube video player 2'
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </div>
        {/* Item 3 */}
        <div className='hidden duration-1000 ease-in-out h-full w-full' data-carousel-item>
          <iframe
            className='h-full w-full'
            src='https://www.youtube.com/embed/Sp1hff70HRs?si=KXu4kgCtq72AW9Sg'
            title='YouTube video player 3'
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </div>
        {/* Item 4 */}
        <div className='hidden duration-1000 ease-in-out h-full w-full' data-carousel-item>
          <iframe
            className='h-full w-full'
            src='https://www.youtube.com/embed/vvYac8jf0aI?si=HBIrbu6Qtffe2GRI'
            title='YouTube video player 4'
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </div>
        {/* Item 5 */}
        <div className='hidden duration-1000 ease-in-out h-full w-full' data-carousel-item>
          <iframe
            className='h-full w-full'
            src='https://www.youtube.com/embed/DlnIdEpJpGU?si=EiAgfJUjDwSghbwz'
            title='YouTube video player 5'
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
        </div>
      </div>
      {/* Slider indicators */}
      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        <button type='button' className='w-3 h-3 rounded-full' aria-current='true' aria-label='Slide 1' data-carousel-slide-to='0'></button>
        <button type='button' className='w-3 h-3 rounded-full' aria-current='false' aria-label='Slide 2' data-carousel-slide-to='1'></button>
        <button type='button' className='w-3 h-3 rounded-full' aria-current='false' aria-label='Slide 3' data-carousel-slide-to='2'></button>
        <button type='button' className='w-3 h-3 rounded-full' aria-current='false' aria-label='Slide 4' data-carousel-slide-to='3'></button>
        <button type='button' className='w-3 h-3 rounded-full' aria-current='false' aria-label='Slide 5' data-carousel-slide-to='4'></button>
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
