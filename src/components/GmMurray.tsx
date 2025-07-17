import React from 'react';
import { Link } from 'gatsby';

const GmMurrayName = 'Grand Master Dave Murray';

export const GmMurray = () => (
  <div className='ease-in-out w-full flex flex-col items-center sm:w-1/4'>
    <div className='w-full px-4 sm:px-2 flex'>
      <div className='flex grow rounded-lg bg-white/50 p-2 mb-2'>
        <div
          aria-label={GmMurrayName}
          className='h-36 w-full'
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696250071/AMAA/gmmurray_jdjhvw.jpg)'
          }}
        />
      </div>
    </div>
    <div className='mb-8 sm:mb-4 px-4 w-full flex flex-col items-start'>
      <h3 className='text-sm sm:text-md flex justify-center mb-2'>
        {GmMurrayName}
      </h3>
      <div className='h-20 flex w-full justify-center items-center mb-1'>
        [
        <Link
          to='/grandmastermurray'
          className='text-xs sm:text-sm mx-1 underline hover:no-underline'
        >
          Visit his Memoire Page
        </Link>
        ]
      </div>
    </div>
  </div>
)

export default GmMurray
