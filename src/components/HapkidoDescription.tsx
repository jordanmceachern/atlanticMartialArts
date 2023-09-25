import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export const HapkidoDescription = () => (
  <div
    className='flex flex-col grow justify-start rounded-lg h-full'
    style={{
      background:
        'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694976469/jump_kick_lxjxmx.jpg',
    }}
  >
    <div
      aria-label='hap ki do description'
      className='flex flex-col bg-black/50 w-full h-full px-4 py-4 items-start justify-start rounded-lg text-white'
    >
      <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline mb-3'>Hap Ki Do</h2>
      <p className='text-xs sm:text-sm md:text-md w-full justify-center flex flex-nowrap mb-3'>
        ~ way of coordinated energy ~
      </p>
      <p className='mb-2 text-xs sm:text-sm md:text-md'>
        A more complete grappling art than Tae Kwon Do, Hap Ki Do employs throws, pressure points, joint locks, ground work, as well as strikes with the hands and feet.
      </p>
      <p className='mb-2 text-xs sm:text-sm md:text-md'>
        Hap Ki Do is an excellent form of self defense: Students will learn a very wide range of self defense techniques.
      </p>
      <p className='text-xs sm:text-sm md:text-md'>
        Students will learn the traditional form of the art as passed down from the founder Choi Yung Sool, to Grandmaster Chung Kee Tae, and from him to Master Murray.
      </p>
    </div>
  </div>
)

const LazyHapkidoDescription = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <HapkidoDescription />
  </Suspense>
)

export default LazyHapkidoDescription
