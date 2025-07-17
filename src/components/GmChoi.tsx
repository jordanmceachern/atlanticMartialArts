import React from 'react';

const GmChoiName = 'Grand Master Choi Yung Sool';

export const GmChoi = () => (
  <div className='ease-in-out w-full flex flex-col items-center sm:w-1/4'>
    <div className='w-full px-4 sm:px-2 flex'>
      <div className='flex grow rounded-lg bg-white/50 p-2 mb-2'>
        <div
          aria-label={GmChoiName}
          className='h-36 w-full'
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696250071/AMAA/gmchoi_h6nlla.gif)'
          }}
        />
      </div>
    </div>
    <div className='mb-8 sm:mb-4 px-4 flex flex-col items-start'>
      <h3 className='text-sm sm:text-md flex justify-center mb-2'>
        {GmChoiName}
      </h3>
      <div className='scroll-vertical h-20 overflow-y-scroll pe-1'>
        <p className='text-xs sm:text-sm mb-1'>
          Grand Master Choi Yong-sool (November 9, 1904 – June 15, 1986), born in South Korea, was the founder of Hapkido.
        </p>
        <p className='text-xs sm:text-sm mb-1'>
          In 1948, he began teaching classes of his art that he first called "Yu Sul", which he later changed to "HapKiDo".
        </p>
        <p className='text-xs sm:text-sm'>
          Grand Master Choi was honored with the titles of "Changsija" which is Korean for "Founder", and "Doju" which means "Keeper of The Way".
        </p>
      </div>
    </div>
  </div>
)

export default GmChoi
