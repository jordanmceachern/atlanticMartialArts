import React from 'react';
import { Spinner } from "@material-tailwind/react";

export const LoadingSpinner = () => (
  <div className='w-full h-full flex justify-center items-center'>
    <div className='p-4 bg-black/10 rounded-full'>
      <Spinner />
    </div>
  </div>
)

export default LoadingSpinner
