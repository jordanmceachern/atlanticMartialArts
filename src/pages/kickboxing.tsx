import React from 'react';
import PageLayout from '../components/PageLayout';
import { Carousel } from '@material-tailwind/react';
import LoadingSpinner from '../components/LoadingSpinner';
import Banner from '../components/Banner';
import KickBoxingDescription from '../components/KickBoxingDescription';
import MoreInformation from '../components/MoreInformation';

export const Kickboxing = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex grow items-start justify-center'>
        <div className='grid grid-cols-1 gap-4 m-4 md:min-w-[500px] max-w-[940px]'>
          <Carousel
            className='h-80 sm:h-96 flex flex-nowrap rounded-lg col-start-1 col-end-2 md:col-end-3'
            placeholder={LoadingSpinner}
          >
            {/* Item 1 */}
            <Banner
              backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1695585134/kick_boxing_sparring_lij9az.jpg'
              backgroundPosition='center'
              className='h-72 sm:h-96'
            />
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
          </Carousel>
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
