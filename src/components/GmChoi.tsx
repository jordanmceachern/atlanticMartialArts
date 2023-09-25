import React from 'react';

const GmChoiName = 'Grand Master Choi Yung Sool';

const GmChoi = () => (
  <div className='w-full flex flex-col items-start sm:w-1/3 mx-0 sm:mx-2'>
    <img
      alt={GmChoiName}
      className='w-full mb-2'
      src='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696250071/gmchoi_h6nlla.gif'
    />
    <h3 className='text-sm sm:text-md flex justify-center mb-2'>
      {GmChoiName}
    </h3>
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
)

export default GmChoi
