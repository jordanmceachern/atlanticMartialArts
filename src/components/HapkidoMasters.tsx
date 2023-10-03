import React, { Suspense } from 'react';
import { Carousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';
import GmChoi from './GmChoi';
import CkTae from './CkTae';
import GmMurray from './GmMurray';

export const HapkidoMasters = () => (
  <div
    aria-label='founders of hap ki do'
    className='rounded-lg bg-black/50 text-white flex flex-col items-center h-full w-full'
  >
    <h2 className='text-md md:text-base w-full flex justify-center underline my-4'>Founders</h2>
    <div className='hidden sm:flex flex-nowrap px-2'>
      <GmChoi />
      <CkTae />
      <GmMurray />
    </div>
    <div className='px-3 flex'>
      <Carousel className='flex grow flex-nowrap visible sm:hidden'>
        {/* Item 1 */}
        <GmChoi />
        {/* Item 2 */}
        <CkTae />
        {/* Item 3 */}
        <GmMurray />
      </Carousel>
    </div>
  </div>
)

const LazyHapkidoMasters = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <HapkidoMasters />
  </Suspense>
)

export default LazyHapkidoMasters
