import React from 'react';

const CkTaeName = 'Grand Master Chung Kee Tae';

const CkTae = () => (
  <div className='ease-in-out w-full flex flex-col items-center sm:w-1/4'>
    <div className='w-full px-4 sm:px-2 flex'>
      <div className='flex grow rounded-lg bg-white/50 p-2 mb-2'>
        <div
          aria-label={CkTaeName}
          className='h-36 w-full'
          style={{
            background:
              'top / contain no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696335813/tkchung_hdyrgl.jpg)'
          }}
        />
      </div>
    </div>
    <div className='mb-8 sm:mb-4 px-4 flex flex-col items-start'>
      <h3 className='text-sm sm:text-md flex justify-center mb-2'>
        {CkTaeName}
      </h3>
      <div className='scroll-vertical h-20 overflow-y-scroll pe-1'>
        <p className='text-xs sm:text-sm mb-1'>
          Chung Kee Tae (July 25, 1939 – April 6, 2015), born in Daegu City, Korea, was was trained directly under the founders of both Tae Kwon Do (General Choi) and Hapkido (Grand Master Choi Yong-Sool). Master Chung was
          also the founder and former President of the Canadian Hap Ki Do Association.
        </p>
        <p className='text-xs sm:text-sm mb-1'>
          In 1972, as a 1st generation student, General Choi had asked Master Chung where he'd like to open his first school, to which he replied "in Canada". Later in 1973, Master Chung moved to Toronto where he opened his school.
        </p>
        <p className='text-xs sm:text-sm'>
          On June 19, 1998, Master Chung was inducted into the Hap Ki Do Hall of Fame for bringing Hap Ki Do to Canada, and contributing it as an Art of self-defense for Tae Kwon Do.
        </p>
      </div>
    </div>
  </div>
)

export default CkTae
