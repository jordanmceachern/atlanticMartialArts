import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import KickBoxingDescription from '../components/KickBoxingDescription';
import MoreInformation from '../components/MoreInformation';

const Kickboxing = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex grow items-start justify-center'>
        <div className='grid grid-cols-1 gap-4 m-4 md:min-w-[500px] max-w-[940px]'>
          <Banner
            backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1695585134/kick_boxing_sparring_lij9az.jpg'
            backgroundPosition='center'
            className='h-72 sm:h-96'
          />
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
