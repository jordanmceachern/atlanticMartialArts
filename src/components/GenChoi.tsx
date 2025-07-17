import React from 'react';

const GenChoiName = 'General Choi';

export const GenChoi = () => (
  <div className='ease-in-out w-full flex flex-col items-center sm:w-1/4'>
    <div className='w-full px-4 sm:px-2 flex'>
      <div className='flex grow rounded-lg bg-white/50 p-2 mb-2'>
        <div
          aria-label={GenChoiName}
          className='h-36 w-full'
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1696250071/AMAA/gen_choi_g4maul.gif)'
          }}
        />
      </div>
    </div>
    <div className='mb-8 sm:mb-4 px-4 flex flex-col items-start'>
      <h3 className='text-sm sm:text-md flex justify-center mb-2'>
        {GenChoiName}
      </h3>
      <div className='scroll-vertical h-20 overflow-y-scroll pe-1'>
        <p className='text-xs sm:text-sm mb-1'>
          Choi Hong-hi (November 9, 1918 – June 15, 2002), was a South Korean Army general, and martial artist who
          founded the first International Federation for Tae Kwon Do (ITF).
        </p>
      </div>
    </div>
  </div>
)

export default GenChoi
