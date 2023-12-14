import React, { Suspense, ReactNode } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

type BannerProps = {
  backgroundImage?: string;
  backgroundPosition?: string;
  children?: ReactNode;
  className?: string;
}

export const Banner = ({
  backgroundImage,
  backgroundPosition,
  children,
  className
}: BannerProps) => {
  return (
    <div
      className={`relative col-start-1 col-end-2 md:col-end-3 rounded-lg flex flex-col${className ? ` ${className}` : ''}`}
      style={{
        background:
          `${backgroundPosition ? backgroundPosition : 'top'} / cover no-repeat ${backgroundImage ? `url(${backgroundImage})` : 'black'}`,
      }}
    >
      <div className='flex flex-col grow w-full rounded-lg'>
        {children}
      </div>
    </div>
  )
}

const LazyBanner = (props?: BannerProps) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Banner {...props} />
  </Suspense>
)

export default LazyBanner