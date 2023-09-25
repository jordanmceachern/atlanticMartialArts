import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import ViewMoreLess from './ViewMoreLess';
import GmChoi from './GmChoi';
import CkTae from './CkTae';
import GmMurray from './GmMurray';

export const HapkidoMasters = () => (
  <div
    aria-label='ancestors of hap ki do'
    className='flex grow w-full justify-center rounded-lg bg-black/50'
  >
    <ViewMoreLess index={2} title='Founders'>
      <div className='flex'>
        <GmChoi />
        <CkTae />
        <GmMurray />
      </div>
    </ViewMoreLess>
  </div>
)

const LazyHapkidoMasters = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <HapkidoMasters />
  </Suspense>
)

export default LazyHapkidoMasters
