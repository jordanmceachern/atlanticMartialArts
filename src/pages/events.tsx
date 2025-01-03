import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import MoreInformation from '../components/MoreInformation';

export const Events = ({ location }) => {
  const ladiesSelfDefenseDescription = 'Saturday January 25 and February 22, 12:30pm to 2pm ladies self defense winter sessions. Storm dates are February 1 and March 1. Limited space available. Cost is $60, with $10 off if you register before January 10.';

  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col px-4 sm:px-6 md:px-10 grow self-center items-center justify-start w-full md:min-w-[600px] max-w-[1040px]'>
        <div className='h-96 sm:h-[36rem] w-full my-4 sm:my-8'>
          <div
            aria-describedby='ladiesselfdefense'
            className='h-full mx-auto'
            style={{
              background:
                'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1735662986/ladies_self-defense_xg1opo.jpg)',
            }}
            title={ladiesSelfDefenseDescription}
          />
        </div>
        <MoreInformation className='w-full mb-4 sm:mb-6 md:mb-10' />
      </div>
    </PageLayout>
  )
};

export default Events;
