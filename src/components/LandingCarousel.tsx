import React, { useState, Suspense } from 'react';
import { Button, Carousel as MtwCarousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';

const LandingCarouselComp = ({ autoPlay }: { autoPlay?: boolean }) => (
  <MtwCarousel
    autoplay={autoPlay}
    autoplayDelay={3500}
    loop
    className='relative rounded-lg h-full w-full flex'
  >
    {/* Item 1 */}
    <div
      aria-label='Master Ross demonstrates breaking 2 cement stones using the hammer fist technique'
      className='ease-in-out h-full w-full'
    >
      <iframe
        className='h-full w-full'
        src='https://www.youtube.com/embed/2-7th58SSNA?si=s0OfLA37DSVi4xXZ&autoplay=1&loop=1&mute=1&playlist=2-7th58SSNA'
        title='Master Ross brick breaking'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
    {/* Item 2 */}
    <div
      aria-label='Photo of Master Denis, Mr.Bowstick, Master Ross, and Mr.Gilbert'
      className='ease-in-out h-full w-full'
      style={{
        background:
          'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1702846637/bradtesting_wepdij.jpg)',
      }}
    >
      <div className='inset-0 h-full w-full flex items-end justify-center'>
        <div className='bg-black/50 mx-2 mb-16 flex px-3 py-2 rounded-lg text-white text-center'>
          Congrats to Mr.Bostick for passing his black belt testing!
        </div>
      </div>
    </div>
    {/* Item 3 */}
    <div
      aria-label='Mr.Bowstick breaks boards for his black belt testing using an axe kick followed by a roundhouse'
      className='ease-in-out h-full w-full'
    >
      <iframe
        className='h-full w-full'
        src='https://www.youtube.com/embed/gnMrvRUGmeE?si=aAtylkI72bPOSF3p&mute=1&playlist=gnMrvRUGmeE'
        title='Mr.Bowstick board breaking'
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
    {/* Item 4 */}
    <div
      aria-label='Master Ross and Mr.Bostick demonstrate the black belt 3-step pattern'
      className='ease-in-out h-full w-full'
    >
      <iframe
        className='h-full w-full'
        src='https://www.youtube.com/embed/xICeEoYxbjc?si=k7phCyqKiPusdpGZ&mute=1&playlist=xICeEoYxbjc'
        title='Master Ross and Mr.Bostick demonstrate the black belt 3-step'
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
    {/* Item 5 */}
    <div
      aria-label='Photo of School'
      className='ease-in-out h-full w-full'
      style={{
        background:
          'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694544887/dojo_vdhf6m.jpg)',
      }}
    >
      <div className='inset-0 h-full w-full flex items-end justify-center'>
        <div
          aria-label='renovation notice'
          className='bg-black/50 mx-16 mb-16 flex px-3 py-2 rounded-lg text-white text-center'
        >
          More renovations are coming soon!
        </div>
      </div>
    </div>
    {/* Item 6 */}
    <div
      aria-label='Photo of school gym exercise equipment'
      className='ease-in-out h-full w-full'
      style={{
        background: 'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1702564712/schoolgym_awftyz.jpg)',
      }}
    />
    {/* Item 7 */}
    <div
      aria-label='Photo of school heavy bags'
      className='ease-in-out h-full w-full'
      style={{
        background: 'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696238449/smackysmacky_ceo3ob.jpg)',
      }}
    />
  </MtwCarousel>
)

export const LazyLandingCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  const toggleAutoPlay = () => setAutoPlay(autoplay => !autoplay);
  const buttonText = autoPlay ? 'pause' : 'play';

  return (
    <>
      <div className='flex flex-col items-center h-80 sm:h-96'>
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
