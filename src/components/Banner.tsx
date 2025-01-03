import React, { ReactNode } from 'react';

export type BannerProps = {
  backgroundImage?: string;
  backgroundPosition?: string;
  children?: ReactNode;
  className?: string;
  title?: string;
}

export const Banner = ({
  backgroundImage,
  backgroundPosition,
  children,
  className,
  title
}: BannerProps) => {
  return (
    <div
      className={`relative col-start-1 col-end-2 md:col-end-3 rounded-lg flex flex-col${className ? ` ${className}` : ''}`}
      style={{
        background:
          `${backgroundPosition ? backgroundPosition : 'top'} / cover no-repeat ${backgroundImage ? `url(${backgroundImage})` : 'black'}`,
      }}
      title={title}
    >
      <div className='flex flex-col grow w-full rounded-lg'>
        {children}
      </div>
    </div>
  )
}

export default Banner