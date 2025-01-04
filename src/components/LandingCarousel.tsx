import React, { useState } from 'react';
import { Button, Carousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';

export const CarouselWrapper = (props) => {
  const [autoPlay, setAutoPlay] = useState(true);

  const toggleAutoPlay = () => setAutoPlay(autoplay => !autoplay);
  const buttonText = autoPlay ? 'pause' : 'play';

  return (
    <>
      <div className={`flex flex-col items-center h-80 sm:h-96 w-full ${props.wrapperClassName}`}>
        <Carousel
          autoplay={autoPlay}
          autoplayDelay={3500}
          loop
          className={`relative rounded-lg h-full w-full flex ${props.className}`}
          placeholder={LoadingSpinner}
        >
          {props.children}
        </Carousel>
        <Button
          aria-label='toggle carousel auto-play'
          className='mt-4'
          onClick={toggleAutoPlay}
          placeholder={buttonText}
        >
          {buttonText}
        </Button>
      </div>
    </>
  )
};

export const LandingCarousel = () => {
  return (
    <CarouselWrapper>
      {/* Item 1 */}
      <div
        aria-label='Master Ross demonstrates breaking 2 cement stones using the hammer fist technique'
        className='ease-in-out h-full w-full'
      >
        <iframe
          className='h-full w-full'
          src='https://www.youtube.com/embed/DuGxBzcL2Us?si=rdGDWuwjKUBs-bG-&autoplay=1&mute=1&playlist=DuGxBzcL2Us'
          title='Master Ross brick breaking'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
      </div>
      {/* Item 2 */}
      <div
        aria-label='Photo of all Academy Instructors and Students'
        className='ease-in-out h-full w-full'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1735662986/amaa_students_c705i7.jpg)',
        }}
      />
      {/* <div
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
            <a className='mt-1 flex justify-center hover:bg-white/50 rounded' href='https://www.youtube.com/channel/UCc3Hz0Cq82ifmjo8W5T1RfA' target='_blank' rel='noopener noreferrer'>
              <img src='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893537/qwinn/youtube_wkykc9.png' alt='link to AMAA YouTube channel' />
            </a>
          </div>
        </div>
      </div> */}
      {/* Item 3 */}
      <div className='ease-in-out h-full w-full'>
        <label className='hidden' id='ladiesselfdefense' aria-hidden>
          Saturday January 25 and February 22, 12:30pm to 2pm ladies self defense winter sessions. Storm dates are February 1 and March 1. Limited space available. Cost is $60, with $10 off if you register before January 10.
        </label>
        <div
          aria-describedby='ladiesselfdefense'
          className='h-full mx-auto'
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1735662986/ladies_self-defense_xg1opo.jpg)',
          }}
        />
      </div>
      {/* Item 4 */}
      <div className='ease-in-out h-full w-full'>
        <label className='hidden' id='teenkickboxing' aria-hidden>
          Thursdays 5-6pm, pre-teen kick-boxing for ages 8 to 12 years old. Monthly cost is $50 with the family rate available.
        </label>
        <div
          aria-describedby='teenkickboxing'
          className='h-full mx-auto'
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1735662986/teen_kickboxing_xwla1a.jpg)',
          }}
        />
      </div>
      {/* Item 5 */}
      <div
        aria-label='Photo of Master Ludford, Mr.Bostick, Master Ross, and Mr.Gilbert'
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
    </CarouselWrapper>
  )
}

export default LandingCarousel;
