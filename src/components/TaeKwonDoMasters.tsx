import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import ViewMoreLess from './ViewMoreLess';
import GenChoi from './GenChoi';
import CkTae from './CkTae';
import GmMurray from './GmMurray';

export const TaeKwonDoMasters = () => (
  <div
    aria-label='ancestors of hap ki do'
    className='flex grow w-full justify-center rounded-lg bg-black/50'
  >
    <ViewMoreLess index={2} title='Founders'>
      <div className='flex'>
        <GenChoi />
        <CkTae />
        <GmMurray />
      </div>
    </ViewMoreLess>
  </div>
)

const LazyTaeKwonDoMasters = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <TaeKwonDoMasters />
  </Suspense>
)

export default LazyTaeKwonDoMasters
