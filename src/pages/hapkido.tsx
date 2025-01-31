import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import HapkidoDescription from '../components/HapkidoDescription';
import Belts from '../components/Belts';
import HapkidoMasters from '../components/HapkidoMasters';
import MoreInformation from '../components/MoreInformation';
import { CarouselWrapper } from '../components/LandingCarousel';

export const Hapkido = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow items-center justify-start'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 m-4 sm:mx-16 md:min-w-[500px] max-w-[940px]'>
          <CarouselWrapper wrapperClassName='col-start-1 col-end-2 md:col-end-3 overflow-y-hidden'>
            {/* Item 1 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709316030/cktaehighkick_shdqwh.jpg' className='h-full'>
              <div className='flex flex-col justify-between h-full bg-black/40 w-full px-4 py-4 rounded-lg text-white'>
                <h1 className='text-sm sm:text-md md:text-base w-full flex self-center items-center justify-center uppercase md:mt-10'>Home of the Canadian HapKiDo Association</h1>
                <div
                  aria-label='Canadian Hapkido Association Logo'
                  className='flex self-end h-20 w-20 mt-24 sm:mt-56 md:mt-44 rounded-full'
                  style={{
                    background:
                      'right / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,b_white,ar_1:1,c_fill,g_auto/v1695582177/hapkidoLogo_pupiah.gif)'
                  }}
                ></div>
              </div>
            </Banner>
            {/* Item 2 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1709314082/coreconditioning_mdzsaq.jpg' className='h-full' />
            {/* Item 3 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1701109343/IMG_5001_1_h8n916.jpg' className='h-full' />
            {/* Item 4 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1701109345/IMG_4997_ats0ld.jpg' className='h-full' />
            {/* Item 5 */}
            <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1695570360/masters_mu5jtp.jpg' className='h-full' />
          </CarouselWrapper>
          <div className='relative col-start-1 col-end-2 rounded-lg'>
            <HapkidoDescription />
          </div>
          <div className='relative col-start-1 col-end-2 rounded-lg md:col-start-2 md:col-end-3'>
            <Belts />
          </div>
          <div className='relative rounded-lg col-start-1 col-end-2 md:col-end-3'>
            <HapkidoMasters />
          </div>
          <MoreInformation />
        </div>
      </div>
    </PageLayout>
  );
};

export default Hapkido;
