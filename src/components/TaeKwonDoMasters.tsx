import React, { Suspense } from 'react';
import { Carousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';
import GenChoi from './GenChoi';
import CkTae from './CkTae';
import GmMurray from './GmMurray';
import MRoss from './MRoss';

export const TaeKwonDoMasters = () => (
  <div
    aria-label='founders of tae kwon do'
    className='rounded-lg bg-black/50 text-white flex flex-col items-center h-full w-full'
  >
    <h2 className='text-md md:text-base w-full flex justify-center underline my-4'>Founders</h2>
    <div className='hidden sm:flex flex-nowrap px-2'>
      <GenChoi />
      <CkTae />
      <GmMurray />
      <MRoss />
    </div>
    <Carousel className='flex grow flex-nowrap visible sm:hidden'>
      {/* Item 1 */}
      <GenChoi />
      {/* Item 2 */}
      <CkTae />
      {/* Item 3 */}
      <GmMurray />
      {/* Item 4 */}
      <MRoss />
    </Carousel>
  </div>
)

const LazyTaeKwonDoMasters = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <TaeKwonDoMasters />
  </Suspense>
)

export default LazyTaeKwonDoMasters
