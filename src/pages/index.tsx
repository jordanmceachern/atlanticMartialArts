import React from 'react';
import PageLayout from '../components/PageLayout';
import LandingCarousel from '../components/LandingCarousel';
import Schedule from '../components/Schedule';
import EmailQuestionaire from '../components/EmailQuestionaire';

const App = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col items-center lg:w-[940px] max-w-[940px] mx-4'>
          <h1 className='my-6 sm:my-10 flex justify-center text-lg sm:text-xl text-center'>
            Atlantic Martial Arts Academy
          </h1>
          <LandingCarousel />
          <div className='mt-4 sm:mt-10 w-full'>
            <EmailQuestionaire />
          </div>
          <div className='flex justify-center w-full rounded-lg'>
            <Schedule />
          </div>
        </div>
      </div>
    </PageLayout>
  )
};

export default App;
