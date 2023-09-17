import React, { Suspense } from 'react';
import { Carousel as MtwCarousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';

const CarouselComp = () => (
  <MtwCarousel className='relative h-72 rounded-lg sm:h-96'>
    {/* Item 1 */}
    <div
      aria-label='Photo of School'
      className='ease-in-out h-full w-full'
      style={{
        background:
          'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694544887/dojo_vdhf6m.jpg)',
      }}
    >
      <div className='inset-0 h-full w-full flex items-center justify-center'>
        <div className='bg-black/70 mx-16 flex justify-center px-3 py-2 rounded-lg text-white'>
          <p className='w-full sm:w-3/4 md:w-1/2'>We are currently still renovating some parts of our space, but class operation is not affected</p>
        </div>
      </div>
    </div>
    {/* Item 2 */}
    <div
      aria-label='Photo of school heavy bags'
      className='ease-in-out h-full w-full'
      style={{
        background: 'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694872808/smackysmacky_nygpmn.jpg)',
      }}
    />
  </MtwCarousel>
)

export const Carousel = () => (
  <div className='mx-2 sm:mx-16 flex justify-center'>
    <Suspense fallback={<LoadingSpinner />}>
      <CarouselComp />
    </Suspense>
  </div>
);

export default Carousel;
