import React from 'react';
import { Spinner } from "@material-tailwind/react";

export const LoadingSpinner = () => (
  <div className='w-full h-full flex justify-center items-center'>
    <div className='bg-black/40 rounded-full'>
      <Spinner />
    </div>
  </div>
)

export default LoadingSpinner
