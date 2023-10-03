import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import Banner from '../components/Banner';
import { Link } from 'gatsby';

export const MoreInformation = () => (
  <Banner
    backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1696238449/smackysmacky_ceo3ob.jpg'
    backgroundPosition='center'>
    <div
      aria-label='more information'
      className={`flex flex-col items-center bg-black/50 w-full px-4 py-16 md:py-24 rounded-lg text-white`}
    >
      <p className='text-sm sm:text-md md:text-base flex justify-center'>
        For information on class schedule and pricing,
      </p>
      <p className='text-sm sm:text-md md:text-base flex justify-center'>
        please visit our
        <Link
          to='/information'
          className='mx-1 text-sm sm:text-md md:text-base underline hover:no-underline'
        >
          information
        </Link>
        page.
      </p>
    </div>
  </Banner>
)

const LazyMoreInformation = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <MoreInformation />
  </Suspense>
)

export default LazyMoreInformation
