import React from 'react';
import PageLayout from '../components/PageLayout';
import Carousel from '../components/Carousel';
import Schedule from '../components/Schedule';

const App = () => {
  return (
    <PageLayout>
      <h1 className='my-6 sm:my-10 flex justify-center text-lg sm:text-xl'>
        Atlantic Martial Arts / Maritime Martial Arts Academy
      </h1>
      <Carousel />
      <Schedule />
    </PageLayout>
  )
};

export default App;
