import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'gatsby';

export const MoreInformation = ({ className } : { className?: string }) => (
  <Banner
    className={className ? className : undefined}
    backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709321533/fishbowl_mxaxrx.jpg'
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

export default MoreInformation
