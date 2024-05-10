import React, { useState, Suspense } from 'react';
import { Button, Carousel as MtwCarousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';

const LandingCarouselComp = ({ autoPlay }: { autoPlay?: boolean }) => (
  <MtwCarousel
    autoplay={autoPlay}
    autoplayDelay={3500}
    loop
    className='relative rounded-lg h-full w-full flex'
    placeholder={LoadingSpinner}
  >
    {/* Item 1 */}
    <div
      aria-label='Master Ross demonstrates breaking 2 cement stones using the hammer fist technique'
      className='ease-in-out h-full w-full'
    >
      <iframe
        className='h-full w-full'
        src='https://www.youtube.com/embed/DuGxBzcL2Us?si=rdGDWuwjKUBs-bG-&autoplay=1&mute=1&playlist=2-7th58SSNA'
        title='Master Ross brick breaking'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
    {/* Item 2 */}
    <div
      aria-label='Photo of Joseph McShane and Jordan McEachern demonstrating the orange belt form'
      className='ease-in-out h-full w-full'
      style={{
        background:
          'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1715364249/IMG_5526_sdxba4.jpg)',
      }}
    >
      <div className='inset-0 h-full w-full flex items-end justify-center'>
        <div className='bg-black/50 mx-2 mb-16 px-3 py-2 rounded-lg text-white text-center'>
          Checkout out more of our videos at:
          <a className='mt-1 flex justify-center hover:bg-white/50 rounded' href='https://www.youtube.com/@AtlanticMartialArtsAcademy' target='_blank' rel='noopener noreferrer'>
            <img src='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893537/qwinn/youtube_wkykc9.png' alt='link to AMAA YouTube channel' />
          </a>
        </div>
      </div>
    </div>
    {/* Item 3 */}
    <div
      aria-label='Photo of Master Denis, Mr.Bowstick, Master Ross, and Mr.Gilbert'
      className='ease-in-out h-full w-full'
      style={{
        background:
          'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1702846637/bradtesting_wepdij.jpg)',
      }}
    >
      {/* <div className='inset-0 h-full w-full flex items-end justify-center'>
        <div className='bg-black/50 mx-2 mb-16 flex px-3 py-2 rounded-lg text-white text-center'>
          Congrats to Mr.Bostick for passing his black belt testing!
        </div>
      </div> */}
    </div>
  </MtwCarousel>
)

export const LazyLandingCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  const toggleAutoPlay = () => setAutoPlay(autoplay => !autoplay);
  const buttonText = autoPlay ? 'pause' : 'play';

  return (
    <>
      <div className='flex flex-col items-center h-80 sm:h-96 w-full'>
        <Suspense fallback={<LoadingSpinner />}>
          <LandingCarouselComp autoPlay={autoPlay} />
        </Suspense>
      </div>
      <Button
        aria-label='toggle carousel auto-play'
        className='mt-4'
        onClick={toggleAutoPlay}
      >
        {buttonText}
      </Button>
    </>
  )
};

export default LazyLandingCarousel;
