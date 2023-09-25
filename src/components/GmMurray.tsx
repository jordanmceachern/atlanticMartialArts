import React from 'react';

const GmMurrayName = 'Grand Master Dave Murray';

const GmMurray = () => (
  <div className='w-full flex flex-col items-start sm:w-1/3 mx-0 sm:mx-2'>
    <img
      alt={GmMurrayName}
      className='w-full mb-2'
      src='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696250071/gmmurray_jdjhvw.jpg'
    />
    <h3 className='text-sm sm:text-md flex justify-center mb-2'>
      {GmMurrayName}
    </h3>
    <p className='text-xs sm:text-sm mb-1'>
      Grand Master Dave Murray (April 30, 1950 – May 21, 2018), born in Campbellton, NB, was the founder of
      the Atlantic Martial Arts Academy (formerly known as Maritime Martial Arts Academy) in 1990. He began
      this school after returning to his hometown of Fredericton, having studied martial arts in Toronto for
      22 years.
    </p>
    <p className='text-xs sm:text-sm mb-1'>
      Master Murray held an 8th degree black belt in Tae Kwon Do and 7th in Hapkido, having trained in these
      Martial Arts for over 35 years.
    </p>
    <p className='text-xs sm:text-sm'>
      He also was the President of the Canadian HapKiDo Federation, after Grand Master Chung Kee Tae.
    </p>
  </div>
)

export default GmMurray
