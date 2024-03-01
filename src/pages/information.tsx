import React from 'react';
import PageLayout from '../components/PageLayout';
import { ScheduleTimesLazy } from '../components/Schedule';
import Pricing from '../components/Pricing';
import Banner from '../components/Banner';
import EmailQuestionaire from '../components/EmailQuestionaire';

const Information = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow items-center justify-start'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 m-4 sm:mx-16 md:min-w-[500px] max-w-[940px]'>
          <EmailQuestionaire />
          <div className='relative col-start-1 col-end-2 rounded-lg'>
            <ScheduleTimesLazy />
          </div>
          <div className='relative col-start-1 col-end-2 md:col-start-2 md:col-end-3 rounded-lg'>
            <Pricing />
          </div>
          <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696165783/mastermurray2010_bbrdm5.jpg'>
            <div
              aria-label='student oath'
              className={`flex flex-col bg-black/50 w-full px-4 pt-4 pb-10 md:pb-28 items-start rounded-lg text-white`}
            >
              <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline uppercase mb-1'>Student Oath</h2>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                While teaching martial and defense skills, the Atlantic Martial Arts Academy has a student Oath to be taken at the start of
                any testing, and intended to be kept as a guide to actions in life. The Student Oath is as follows:
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full justify-center flex flex-nowrap'>
                ~
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
                As a member of the Atlantic Martial Arts Academy, I promise to obey the rules and regulations of this academy at all times.
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
                I promise to treat each person with dignity and respect.
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
                I promise never to fight to accomplish selfish ends.
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
                I promise never to do anything to discredit or harm the reputation of my academy.
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full justify-center flex flex-nowrap'>
                ~
              </p>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                It was Grand Master Murray's philosophy that training is not about how many medals you win, but how good of a person you can become.
                The martial arts and skills that come with their study are not seen as a method of holding power over others, but rather as
                a way of self improvement for the student that he or she may have confidence, and help use their skills only for good.
              </p>
            </div>
          </Banner>
          <Banner
            backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694544887/dojo_vdhf6m.jpg'
            backgroundPosition='center'>
            <div
              aria-label='location'
              className={`flex flex-col bg-black/50 w-full px-4 pt-4 pb-10 md:pb-28 items-start rounded-lg text-white`}
            >
              <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline uppercase mb-1'>Location</h2>
              <p className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
                Atlantic Martial Arts Academy is located in the top floor studio of the Multi-Cultural
                Centre Gym (Old YMCA by exhibition ground), at 28 Saunders Street, Fredericton, New Brunswick.
              </p>
            </div>
          </Banner>
        </div>
      </div>
    </PageLayout>
  );
};

export default Information;
