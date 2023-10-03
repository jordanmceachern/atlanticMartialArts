import React from 'react';

const CkTaeName = 'Grand Master Chung Kee Tae';

const CkTae = () => (
  <div className='ease-in-out w-full flex flex-col items-center sm:w-1/3'>
    <div className='rounded-lg bg-white/50 p-2 mb-2' style={{ width: 'calc(100% - 1rem)' }}>
      <div
        aria-label={CkTaeName}
        className='h-28'
        style={{
          background:
            'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696335813/tkchung_hdyrgl.jpg)'
        }}
      />
    </div>
    <div className='mb-8 sm:mb-4 px-4 flex flex-col items-start'>
      <h3 className='text-sm sm:text-md flex justify-center mb-2'>
        {CkTaeName}
      </h3>
      <div className='scroll-vertical h-20 overflow-y-scroll'>
        <p className='text-xs sm:text-sm mb-1'>
          Chung Kee Tae (? – April 6, 2015) was was trained directly under the founders of both Tae Kwon Do and Hapkido. He was
          also the former President of the Canadian HapKiDo Federation.
        </p>
      </div>
    </div>
  </div>
)

export default CkTae
