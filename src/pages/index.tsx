import React from 'react';
import PageLayout from '../components/PageLayout';
import Carousel from '../components/Carousel';
import Schedule from '../components/Schedule';

const App = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col lg:w-[940px] max-w-[940px] mx-4'>
          <h1 className='my-6 sm:my-10 flex justify-center text-lg sm:text-xl text-center'>
            Atlantic Martial Arts Academy
          </h1>
          <Carousel />
          <div className='flex justify-center rounded-lg'>
            <Schedule />
          </div>
        </div>
      </div>
    </PageLayout>
  )
};

export default App;
