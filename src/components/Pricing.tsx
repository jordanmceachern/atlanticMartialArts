import React from 'react';

export const Pricing = () => (
  <div
    className='flex grow items-center justify-center rounded-lg h-full'
    style={{
      background:
        'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694976469/AMAA/steve_sdad_mtrmurray_r949r1.jpg)',
    }}
  >
    <ul
      aria-label='class schedule'
      className='h-full flex flex-col bg-black/50 w-full px-4 py-4 items-start rounded-lg text-white'
    >
      <h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1'>PRICING</h2>
      <li className='text-xs sm:text-sm md:text-md w-full justify-start flex mt-1'>
        OFFERED PACKAGES:
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-start flex mt-1'>
        Novice - 1 hour of training or 1 class /week
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-start flex mt-1'>
        Intermediate - 2 hours of training or 2 classes /week
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-start flex mt-1 mb-2'>
        Ultimate - 3 hours or more of training /week (access additional classes in any art)
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        FIRST ART <div className='ml-8 flex grow justify-end text-end'>($100 ult.) ($80 Int.) ($50 Nov.) /month</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        SECOND ART <div className='ml-8 flex grow justify-end text-end'>($0 ult.) ($40 Int.) ($25 Nov.) /month</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        THIRD ART <div className='ml-8 flex grow justify-end text-end'>($0 ult.) ($40 Int.) ($25 Nov.) /month</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        TODDLERS <div className='ml-8 flex grow justify-end text-end'>$50 /month</div>
      </li>
      {/* <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        WEAPONS<div className='ml-8 flex grow justify-end text-end'>$15 /class or $40 /month</div>
      </li> */}
      <li className='my-2 text-xs sm:text-sm md:text-md w-full justify-start flex flex-nowrap'>
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
      <li className='my-2 text-xs sm:text-sm md:text-md w-full justify-start flex flex-nowrap'>
        Regular Discount
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        3 months<div className='ml-8 flex grow justify-end text-end'>10% off</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        6 months<div className='ml-8 flex grow justify-end text-end'>15% off</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-between flex flex-nowrap'>
        12 months<div className='ml-8 flex grow justify-end text-end'>20% off + included uniform</div>
      </li>
      <li className='text-xs sm:text-sm md:text-md w-full justify-center flex text-center mt-1'>
        ALL PRICES INCLUDE TAX - Paid on the 1st of every month
      </li>
    </ul>
  </div>
)

export default Pricing;