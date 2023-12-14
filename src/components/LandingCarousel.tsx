import React, { Suspense } from 'react';
import { Carousel as MtwCarousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';

const LandingCarouselComp = () => (
  <MtwCarousel
    autoplay
    autoplayDelay={2950}
    loop
    className='relative rounded-lg h-full'
  >
    {/* Item 1 */}
    <div
      aria-label='Photo of School'
      className='ease-in-out h-full w-full'
    >
      <iframe
        className='h-full w-full'
        src='https://www.youtube.com/embed/2-7th58SSNA?si=s0OfLA37DSVi4xXZ&autoplay=1&mute=1&loop=1&playlist=2-7th58SSNA'
        title='Master Ross brick breaking'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
    {/* Item 2 */}
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
          className='bg-black/50 mx-16 flex px-3 py-2 rounded-lg text-white text-center'
        >
          More renovations are coming soon!
        </div>
      </div>
    </div>
    {/* Item 3 */}
    <div
      aria-label='Photo of school gym exercise equipment'
      className='ease-in-out h-full w-full'
      style={{
        background: 'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1702564712/schoolgym_awftyz.jpg)',
      }}
    />
    {/* Item 4 */}
    <div
      aria-label='Photo of school heavy bags'
      className='ease-in-out h-full w-full'
      style={{
        background: 'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696238449/smackysmacky_ceo3ob.jpg)',
      }}
    />
  </MtwCarousel>
)

export const LazyLandingCarousel = () => (
  <div className='flex flex-col shrink-0 items-center h-72 sm:h-96'>
    <Suspense fallback={<LoadingSpinner />}>
      <LandingCarouselComp />
    </Suspense>
  </div>
);

export default LazyLandingCarousel;
