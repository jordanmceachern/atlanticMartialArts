import React from 'react';

const CkTaeName = 'Grand Master Chung Kee Tae';

const CkTae = () => (
  <div className='w-full flex flex-col items-start sm:w-1/3 mx-0 sm:mx-2'>
    <img
      alt={CkTaeName}
      className='w-full mb-2'
      src='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696250071/tkchung_zqg5gt.jpg'
    />
    <h3 className='text-sm sm:text-md flex justify-center mb-2'>
      {CkTaeName}
    </h3>
    <p className='text-xs sm:text-sm mb-1'>
      Chung Kee Tae (? – April 6, 2015) was was trained directly under the founders of both Tae Kwon Do and Hapkido. He was
      also the former President of the Canadian HapKiDo Federation.
    </p>
    {/* <p className='text-xs sm:text-sm mb-1'>
      In 1948, he began teaching classes of his art that he first called "Yu Sul", which he later changed to "HapKiDo".
    </p>
    <p className='text-xs sm:text-sm'>
      Grand Master Choi was honored with the titles of "Changsija" which is Korean for "Founder", and "Doju" which means "Keeper of The Way".
    </p> */}
  </div>
)

export default CkTae
