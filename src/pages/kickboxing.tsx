import React from 'react';
import PageLayout from '../components/PageLayout';
import { CarouselWrapper } from '../components/LandingCarousel';
import Banner from '../components/Banner';
import KickBoxingDescription from '../components/KickBoxingDescription';
import MoreInformation from '../components/MoreInformation';

export const Kickboxing = ({ location }) => {

  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex grow items-start justify-center'>
        <div className='grid grid-cols-1 gap-4 m-4 md:min-w-[500px] max-w-[940px]'>
          <CarouselWrapper className='rounded-lg flex-nowrap col-start-1 col-end-2 md:col-end-3'>
            {/* Item 1 */}
            <div className='ease-in-out h-full w-full relative'>
              <div
                aria-label='Master Stephen Ross with Jean -Yves.'
                className='h-full mx-auto'
                style={{
                  background:
                    'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1735919350/kickboxingGuys_yfgaru.jpg)',
                }}
              />
              <div
                aria-label='Jean -Yves logo'
                className='absolute end-12 sm:end-40 bottom-0 h-40 w-28 mt-24 sm:mt-56 md:mt-44 rounded-full'
                style={{
                background:
                  'right / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,c_fill,g_auto/v1735919346/icemanLogo_ojlxes.jpg)'
                }}
              ></div>
            </div>
            {/* Item 2 */}
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
            {/* Item 3 */}
            <Banner
              backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1695585134/kick_boxing_sparring_lij9az.jpg'
              backgroundPosition='center'
              className='h-72 sm:h-96'
            />
          </CarouselWrapper>
          <div className='relative rounded-lg col-start-1 col-end-2 md:col-end-3'>
            <KickBoxingDescription />
          </div>
          <MoreInformation />
        </div>
      </div>
    </PageLayout>
  );
};

export default Kickboxing;
