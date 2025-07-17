import React from 'react';

const MRossName = 'Master Steven Ross';

export const MRoss = () => (
  <div className='ease-in-out w-full flex flex-col items-center sm:w-1/4'>
    <div className='w-full px-4 sm:px-2 flex'>
      <div className='flex grow rounded-lg bg-white/50 p-2 mb-2'>
        <div
          aria-label={MRossName}
          className='h-36 w-full'
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1702393376/AMAA/403410890_268798462847088_9192980248118517489_n_czbfun.jpg)'
          }}
        />
      </div>
    </div>
    <div className='mb-8 sm:mb-4 px-4 flex flex-col items-start'>
      <h3 className='text-sm sm:text-md flex justify-center mb-2'>
        {MRossName}
      </h3>
      <div className='scroll-vertical h-20 overflow-y-scroll pe-1'>
        <p className='text-xs sm:text-sm mb-1'>
          Master Steven Ross (October 25, 1993 - present), has been studying Hap Ki Do and Tae Kwon Do for 20 years,
          and currently has his 6th and 5th dan for each respectively.
        </p>
        <p className='text-xs sm:text-sm'>
          Master Ross took over for Grand Master Murray in 2015, founding the Atlantic Martial Arts Academy.
        </p>
      </div>
    </div>
  </div>
)

export default MRoss
