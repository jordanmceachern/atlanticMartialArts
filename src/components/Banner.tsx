import React, { Suspense, ReactNode } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

type BannerProps = {
  backgroundImage?: string;
  children?: ReactNode;
}

export const Banner = ({
  backgroundImage,
  children
}: BannerProps) => {
  return (
    <div
      className='relative col-start-1 col-end-2 md:col-end-3 rounded-lg'
      style={{
        background:
          `center / cover no-repeat ${backgroundImage ? `url(${backgroundImage})` : 'black'}`,
      }}
    >
      <div className='flex flex-grow items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

const LazyBanner = (props?: BannerProps) => (
  <Suspense fallback={<LoadingSpinner />}>
    {/* <Banner {...props} /> */}
    <LoadingSpinner />
  </Suspense>
)

export default LazyBanner