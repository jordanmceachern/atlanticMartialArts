import React, { Suspense } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

type PricingProps = {
  isBannerWidth?: boolean
}

const Pricing = ({ isBannerWidth }: PricingProps) => (
  <div
    className='flex flex-grow items-center justify-center rounded-lg'
    style={{
      background:
        'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694976469/steve_sdad_mtrmurray_r949r1.jpg)',
    }}
  >
    <ul
      aria-label='class schedule'
      className={`flex flex-col bg-black/50 w-full px-4 py-4 ${isBannerWidth ? 'md:w-4/5 lg:w-3/4 xl:w-1/2 mx-16 sm:mx-0' : ''} items-start rounded-lg text-white`}
    >
      <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1'>PRICING</h2>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        FIRST ART <div className='ml-8 flex grow justify-end text-end'>$92 /month</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        SECOND ART <div className='ml-8 flex grow justify-end text-end'>$46 /month</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        THIRD ART <div className='ml-8 flex grow justify-end text-end'>$46 /month</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        TODDLERS <div className='ml-8 flex grow justify-end text-end'>$40 /month</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        WEAPONS<div className='ml-8 flex grow justify-end text-end'>$15 /art or $40 /month</div>
      </li>
      <li className='my-1 text-xs sm:text-sm md:text-md w-full justify-start flex flex-nowrap'>
        Family Discount
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        1st Family Member<div className='ml-8 flex grow justify-end text-end'>Full Price</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        2nd Family Member<div className='ml-8 flex grow justify-end text-end'>Half Price</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        3rd Family Member<div className='ml-8 flex grow justify-end text-end'>Half Price</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        4th+<div className='ml-8 flex grow justify-end text-end'>Free</div>
      </li>
      <li className='my-1 text-xs sm:text-sm md:text-md w-full justify-start flex flex-nowrap'>
        Regular Discount
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        3 months<div className='ml-8 flex grow justify-end text-end'>10% off</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        12 months<div className='ml-8 flex grow justify-end text-end'>20% off</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-center flex text-center mt-1'>
        ALL PRICES INCLUDE TAX
      </li>
    </ul>
  </div>
)

const PricingLazy = (props?: PricingProps) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Pricing {...props} />
  </Suspense>
)
export default PricingLazy;