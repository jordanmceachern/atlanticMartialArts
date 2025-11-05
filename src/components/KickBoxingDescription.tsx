import React from 'react';

export const KickBoxingDescription = () => (
  <article
    className='flex flex-col grow justify-start rounded-lg h-full'
    style={{
      background:
        'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696177109/AMAA/kickboxing_ohz7vc.jpg',
    }}
  >
    <div
      aria-label='hap ki do description'
      className='flex flex-col bg-black/50 w-full h-full px-4 py-4 items-start justify-start rounded-lg text-white'
    >
      <h2 className='text-md md:text-base w-full flex justify-center underline mb-3'>Kick Boxing</h2>
      <p className='text-sm md:text-md w-full justify-start flex flex-nowrap mb-3'>
        Kickboxing is an excellent fitness sport combining the hands and feet with option to compete in bouts at all levels.
      </p>
      <p className='text-sm md:text-md w-full justify-start flex flex-nowrap mb-3'>
        An incredible cardiovascular workout and great self defense for men and women. Lose weight, develop strength,
        stamina, flexibility, and speed, all while learning proper fighting technique.
      </p>
      <p className='text-sm md:text-md w-full justify-start flex flex-nowrap mb-3'>
        No Experience required!
      </p>
      <p className='text-sm md:text-md w-full justify-start flex flex-nowrap mb-3'>
        Beginners are taught the basics, and everyone goes at their own pace.
      </p>
    </div>
  </article>
);

export default KickBoxingDescription
