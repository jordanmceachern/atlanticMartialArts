import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import TaeKwonDoDescription from '../components/TaeKwonDoDescription';
import TaeKwonDoMasters from '../components/TaeKwonDoMasters';
import Belts from '../components/Belts';
import MoreInformation from '../components/MoreInformation';

const Taekwondo = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow items-center justify-start'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 m-4 sm:mx-16 md:min-w-[500px] max-w-[940px]'>
          <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696166149/jumpkick_n57xka.jpg'>
            <div className='flex flex-col justify-between h-full bg-black/20 w-full px-4 py-4 rounded-lg text-white'>
              <div
                aria-label='Atlantic Martial Arts Academy Tae Kwon Do logo'
                className='flex self-end h-20 w-20 mt-24 sm:mt-56 rounded-full'
                style={{
                  background:
                    'right / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)'
                }}
              ></div>
            </div>
          </Banner>
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
