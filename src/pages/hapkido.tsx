import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import HapkidoDescription from '../components/HapkidoDescription';
import Belts from '../components/Belts';
import HapkidoMasters from '../components/HapkidoMasters';
import MoreInformation from '../components/MoreInformation';

const Hapkido = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow items-center justify-start'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 m-4 sm:mx-16 md:min-w-[500px] max-w-[940px]'>
          <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1695570360/masters_mu5jtp.jpg'>
            <div className='flex flex-col bg-black/40 w-full px-4 pt-4 pb-10 md:pb-28 items-center justify-center rounded-lg text-white'>
              <h1 className='text-sm sm:text-md md:text-base w-full flex items-center justify-center uppercase mb-4 md:mt-10'>Home of the Canadian HapKiDo Association</h1>
              <div
                aria-label='Canadian Hapkido Association Logo'
                className='flex h-28 w-28 sm:h-36 sm:w-36 mt-4 md:mt-10 rounded-full'
                style={{
                  background:
                    'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,b_white,ar_1:1,c_fill,g_auto/v1695582177/hapkidoLogo_pupiah.gif)'
                }}
              ></div>
            </div>
          </Banner>
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
