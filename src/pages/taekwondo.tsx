import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import TaeKwonDoDescription from '../components/TaeKwonDoDescription';
import TaeKwonDoMasters from '../components/TaeKwonDoMasters';
import Belts from '../components/Belts';
import MoreInformation from '../components/MoreInformation';
import LoadingSpinner from '../components/LoadingSpinner';
import { Carousel } from '@material-tailwind/react';

export const Taekwondo = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow items-center justify-start'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 m-4 sm:mx-16 md:min-w-[500px] max-w-[940px]'>
          <Carousel
            autoplay
            autoplayDelay={5000}
            loop
            className='h-80 sm:h-96 flex flex-nowrap rounded-lg col-start-1 col-end-2 md:col-end-3'
            placeholder={LoadingSpinner}
          >
            {/* Item 1 */}
            <div className='relative col-start-1 col-end-2 md:col-end-3 flex flex-col h-full bg-black/20 w-full px-4 py-4 rounded-lg'>
              <div className='absolute inset-0 z-0 grid grid-cols-4'>
                <div
                  className='hidden md:inline md:col-start-1 md:col-end-2'
                  style={{
                    background:
                      '100% center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1699190855/steve2_lcck7y.jpg)'
                  }}  
                />
                <div
                  className='col-start-1 md:col-start-2 col-end-5 md:col-end-4'
                  style={{
                    background:
                      'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1701109339/IMG_5002_esxgbw.jpg)'
                  }}
                />
                <div
                  className='hidden md:inline sm:col-start-4 md:col-end-5'
                  style={{
                    background:
                      'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1701111985/IMG_5008_s4hv3k.jpg)'
                  }}  
                />
              </div>
              <div
                aria-label='Atlantic Martial Arts Academy Tae Kwon Do logo'
                className='z-10 flex self-end h-20 w-20 mt-48 sm:mt-64 rounded-full'
                style={{
                  background:
                    'right / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)'
                }}
              ></div>
            </div>
            {/* Item 2 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709318002/studentsjumpkick_tws6lb.jpg' className='h-full' />
            {/* Item 3 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/padkicking_rtdiod.jpg' className='h-full' />
            {/* Item 4 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314081/mountainclimbers_oudb7c.jpg' className='h-full' />
          </Carousel>
          <div className='relative col-start-1 col-end-2 rounded-lg'>
            <TaeKwonDoDescription />
          </div>
          <div className='relative col-start-1 col-end-2 rounded-lg md:col-start-2 md:col-end-3'>
            <Belts />
          </div>
          <div className='relative rounded-lg col-start-1 col-end-2 md:col-end-3'>
            <TaeKwonDoMasters />
          </div>
          <MoreInformation />
        </div>
      </div>
    </PageLayout>
  );
};

export default Taekwondo;
