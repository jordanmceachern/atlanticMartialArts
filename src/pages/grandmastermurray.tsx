import React from 'react';
import PageLayout from '../components/PageLayout';

export const GrandMasterMurray = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <main className='flex flex-col grow items-center justify-start'>
        <div className='h-full w-full relative grid grid-rows-2 sm:grid-rows-4 grid-cols-3 md:min-w-[600px] max-w-[1040px]'>
          <div
            className='h-80 col-span-3 row-span-1'
            style={{
              background:
                'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1699190529/AMAA/IMG_4955_hvzxfy.jpg)',
            }}
          />
          <div
            className='col-span-3 row-start-2 row-end-4 hidden sm:flex'
            style={{
              background:
                'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1701112091/AMAA/IMG_5007_ry2kym.jpg)',
            }}
          />
          <div
            className='h-80 col-start-1 col-end-2 row-span-1 hidden sm:flex'
            style={{
              background:
                '35% 0% / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696166600/AMAA/knifedefense_iry44l.jpg)',
            }}
          />
          <div
            className='h-80 col-start-1 sm:col-start-2 col-end-4 row-span-1'
            style={{
              background:
                'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696165783/AMAA/mastermurray2010_bbrdm5.jpg)',
            }}
          />
          <div className='murray-content absolute inset-0 bg-black/40 flex justify-center overflow-y-auto'>
            <div className='flex flex-col justify-start lg:w-[940px] max-w-[940px] mx-4 text-white md:px-16 lg:px-36'>
              <h1 className='my-6 sm:mb-10 sm:mt-28 md:mt-32 flex justify-center text-lg sm:text-xl'>
                Grand Master Dave Murray
              </h1>
              <p className='mb-4'>
                Grand Master Dave Murray (April 30, 1950 – May 21, 2018), born in Campbellton, NB, trained in martial arts for over 50
                years. In 1990, he founded the Maritime Martial Arts Academy (now known as the Atlantic Martial Arts Academy). He began this
                school after returning to his hometown of Fredericton, having studied martial arts in Toronto for 22 years.
              </p>
              <p className='mb-4'>
                Master Murray held an 8th degree black belt in both Tae Kwon Do and Hapkido, having trained in these
                Martial Arts for over 35 years.
              </p>
              <p className='mb-4'>
                He also was the President of the Canadian HapKiDo Federation, after Grand Master Chung Kee Tae.
              </p>
              <ul className='mb-4'>
                Some of Master Dave Murray's other accomplishments include:
                <li>
                  - 3 times world bronze medal winner in "Police and Fire Games" 1985, 1987, 1989.
                </li>
                <li>
                  - Black belts in various styles.
                </li>
                <li>
                  - Ontario Fighter of the year 1989.
                </li>
                <li>
                  - Director on the Executive Board for Canadian Amateur Kickboxing.
                </li>
                <li>
                  - President of NB Amateur Kickboxing Association, and co-ordinator of Amateur Kickboxing for the Maritimes.
                </li>
                <li>
                  - Trained with and became personal friends with many world champions such as Jean Yves Theriault (23 time world kickboxing champion), Bill "superfoot" Wallace, Joe Lewis, Benny "the jet" Urquides, and many more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
};

export default GrandMasterMurray;
