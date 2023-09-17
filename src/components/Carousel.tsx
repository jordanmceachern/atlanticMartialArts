import React, { Suspense } from 'react';
import { Carousel as MtwCarousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';

const CarouselComp = () => (
  <MtwCarousel className='relative rounded-lg h-full'>
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
        <div
          aria-label='renovation notice'
          className='bg-black/50 mx-16 flex justify-center px-3 py-2 rounded-lg text-white'
        >
          We are currently still renovating some parts of our space, but class operation is not affected
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
  <div className='mx-2 sm:mx-16 flex justify-center h-72 sm:h-96'>
    <Suspense fallback={<LoadingSpinner />}>
      <CarouselComp />
    </Suspense>
  </div>
);

export default Carousel;
