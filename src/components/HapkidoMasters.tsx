import React, { Suspense } from 'react';
import { Carousel } from "@material-tailwind/react";
import { LoadingSpinner } from './LoadingSpinner';
import GmChoi from './GmChoi';
import CkTae from './CkTae';
import GmMurray from './GmMurray';
import MRoss from './MRoss';

export const HapkidoMasters = () => (
  <div
    aria-label='founders of hap ki do'
    className='rounded-lg text-white flex flex-col items-center h-full w-full bg-cover bg-no-repeat'
    style={{
      backgroundImage: 'url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1701109336/IMG_5006_cji4ve.jpg)',
      backgroundPosition: 'top center'
    }}
  >
    <div className='rounded-lg bg-black/20'>
      <h2 className='text-md md:text-base w-full flex justify-center underline my-4'>Founders</h2>
      <div className='hidden sm:flex flex-nowrap px-2'>
        <GmChoi />
        <CkTae />
        <GmMurray />
        <MRoss />
      </div>
      <Carousel placeholder={LoadingSpinner} className='flex grow flex-nowrap visible sm:hidden'>
        {/* Item 1 */}
        <GmChoi />
        {/* Item 2 */}
        <CkTae />
        {/* Item 3 */}
        <GmMurray />
        {/* Item 4 */}
        <MRoss />
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
