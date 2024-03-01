import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import MoreInformation from '../components/MoreInformation';

const App = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='fitness-centre flex flex-col px-4 sm:px-6 md:px-10 grow self-center items-center justify-start w-full md:min-w-[600px] max-w-[1040px]'>
        <Banner
          className='mt-4 sm:mt-6 md:mt-10 h-[200px] md:h-[500px] sm:h-92 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314081/fitnessstudio_bargwx.jpg'
        />
        <Banner
          className='my-4 sm:my-6 md:my-10 h-36 md:h-80 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/newbags_ghlrvj.jpg'
        />
        <MoreInformation className='w-full mb-4 sm:mb-6 md:mb-10' />
      </div>
    </PageLayout>
  )
};

export default App;
