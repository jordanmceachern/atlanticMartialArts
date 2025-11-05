import React from 'react';
import PageLayout from '../components/PageLayout';
import MoreInformation from '../components/MoreInformation';

export const Events = ({ location }) => {
  const ladiesSelfDefenseDescription = 'Saturday January 25 and February 22, 12:30pm to 2pm ladies self defense winter sessions. Storm dates are February 1 and March 1. Limited space available. Cost is $60, with $10 off if you register before January 10.';
  const summerCampDescription = 'Join us for an unforgettable summer camp experience! From July 14th to 18th, 2025, we\'ll be hosting a fun-filled week of martial arts training, games, and activities. Our expert instructors will guide you through engaging and interactive sessions, perfect for both beginners and experienced martial artists. You\'ll have the opportunity to learn new skills, make new friends, and enjoy a variety of exciting activities. Don\'t miss out on this amazing adventure! Early bird special: $200 if paid by May 15, 2025. Reg. price #225. Family discount of $50 off for 2nd family member. $50 non-refundable deposit to reserve spot, with full payment required on the first day of the camp.';

  return (
    <PageLayout currentPathname={location.pathname}>
      <main className='flex flex-col px-4 sm:px-6 md:px-10 grow self-center items-center justify-start w-full md:min-w-[600px] max-w-[1040px]'>
        <div className='h-96 sm:h-[36rem] w-full my-4 sm:my-8'>
          <div
            className='h-full mx-auto'
            style={{
              background:
                'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1744654444/AMAA/summercamp_ec33bo.jpg)',
            }}
            title={summerCampDescription}
          />
        </div>
        <div className='h-96 sm:h-[36rem] w-full my-4 sm:my-8'>
          <div
            className='h-full mx-auto'
            style={{
              background:
                'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1735662986/AMAA/ladies_self-defense_xg1opo.jpg)',
            }}
            title={ladiesSelfDefenseDescription}
          />
        </div>
        <MoreInformation className='w-full mb-4 sm:mb-6 md:mb-10' />
      </main>
    </PageLayout>
  )
};

export default Events;
