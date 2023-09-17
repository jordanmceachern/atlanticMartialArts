import React from 'react';
import PageLayout from '../components/PageLayout';
import { ScheduleTimesLazy } from '../components/Schedule';
import Pricing from '../components/Pricing';
import Banner from '../components/Banner';

const Information = () => {
  return (
    <PageLayout>
      <div className='flex flex-col flex-grow items-center justify-start'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 m-4 sm:mx-16 md:min-w-[500px]'>
          <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694976469/mastermurray2010_cqquev.jpg'>
            <div
              aria-label='student oath'
              className={`flex flex-col bg-black/50 w-full px-4 pt-4 pb-10 md:pb-28 items-start rounded-lg text-white`}
            >
              <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline uppercase mb-1'>Student Oath</h2>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                As a member of the Atlantic Martial Art Academy, I promise to obey the rules and regulations of this academy at all times.
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                I promise to treat each person with dignity and respect.
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                I promise never to fight to accomplish selfish ends.
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                I promise never to do anything to discredit or harm the reputation of my academy.
              </p>
            </div>
          </Banner>
          <div className='relative col-start-1 col-end-2 rounded-lg'>
            <ScheduleTimesLazy />
          </div>
          <div className='relative col-start-1 col-end-2 md:col-start-2 md:col-end-3 rounded-lg'>
            <Pricing />
          </div>
          <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694544887/dojo_vdhf6m.jpg'>
            <div
              aria-label='location'
              className={`flex flex-col bg-black/50 w-full px-4 pt-4 pb-10 md:pb-28 items-start rounded-lg text-white`}
            >
              <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline uppercase mb-1'>Location</h2>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                Atlantic Martial Arts (formerly Maritime Martial Arts Academy) is located in the top floor studio of the
                Multi-Cultural Centre Gym (Old YMCA by exhibition ground), at 28 Saunders Street, Fredericton, New Brunswick).
              </p>
            </div>
          </Banner>
        </div>
      </div>
    </PageLayout>
  );
};

export default Information;
