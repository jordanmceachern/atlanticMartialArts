import React, { useState } from 'react';
import { Button, Carousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';

export const CarouselWrapper = (props) => {
  const [autoPlay, setAutoPlay] = useState(true);

  const toggleAutoPlay = () => setAutoPlay(autoplay => !autoplay);
  const buttonText = autoPlay ? 'pause' : 'play';

  return (
    <>
      <div className={`flex flex-col items-center h-80 sm:h-96 w-full ${props.wrapperClassName ? props.wrapperClassName : ''}`}>
        <Carousel
          autoplay={autoPlay}
          autoplayDelay={3500}
          loop
          className={`relative rounded-lg h-full w-full flex overflow-y-hidden ${props.className ? props.className : ''}`}
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
      <div className='ease-in-out h-full w-full'>
        <div
          aria-describedby='summercamp'
          className='h-full mx-auto'
          title={'Join us for an unforgettable summer camp experience! From July 14th to 18th, 8:00am - 4:30pm, 2025, we\'ll be hosting a fun-filled week of martial arts training, games, and activities. Our expert instructors will guide you through engaging and interactive sessions, perfect for both beginners and experienced martial artists. You\'ll have the opportunity to learn new skills, make new friends, and enjoy a variety of exciting activities. Don\'t miss out on this amazing adventure! Early bird special: $200 if paid by May 15, 2025. Reg. price #225. Family discount of $50 off for 2nd family member. $50 non-refundable deposit to reserve spot, with full payment required on the first day of the camp.'}
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1744654444/summercamp_ec33bo.jpg)',
          }}
        />
      </div>
      {/* Item 3 */}
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
      {/* Item 4 */}
      <div className='ease-in-out h-full w-full'>
        {/* <label className='hidden' id='ladiesselfdefense' aria-hidden>
          Saturday January 25 and February 22, 12:30pm to 2pm ladies self defense winter sessions. Storm dates are February 1 and March 1. Limited space available. Cost is $60, with $10 off if you register before January 10.
        </label> */}
        <div
          // aria-describedby='ladiesselfdefense'
          className='h-full mx-auto'
          title={'Saturday January 25 and February 22, 12:30pm to 2pm ladies self defense winter sessions. Storm dates are February 1 and March 1. Limited space available. Cost is $60, with $10 off if you register before January 10.'}
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1735662986/ladies_self-defense_xg1opo.jpg)',
          }}
        />
      </div>
      {/* Item 5 */}
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
      {/* Item 6 */}
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
