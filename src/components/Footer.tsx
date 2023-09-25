import React from 'react';

export const Footer = () => (
  <div className='z-20 bg-slate shadow shadow-black w-full py-2 flex justify-self-end justify-center'>
    <div className='w-full flex justify-center items-center max-w-3xl'>
      <div
        aria-label='taekwondo logo'
        className='flex h-14 w-14 sm:h-20 sm:w-20 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116623/taekwondo_nly8vx.gif)',
        }}
      ></div>
      <div
        aria-label='AMMA logo'
        className='flex h-14 w-14 sm:h-20 sm:w-20 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)',
        }}
      ></div>
      <div className='flex mb-1 flex-col items-center text-center text-white text-sm sm:text-base max-w-3xl whitespace-nowrap'>
        General Inquiries
        <div className='flex flex-col justify-center'>
          <a className='px-2 my-1 flex justify-center text-white text-xs sm:text-sm underline hover:no-underline hover:bg-white/20' href='mailto:maritimemartialarts@hotmail.com' target='_top'>
            Email Us
          </a>
          <a className='px-2 flex justify-center text-white text-xs sm:text-sm underline hover:no-underline hover:bg-white/20' href="tel:506-440-3883">
            Phone
          </a>
        </div>
      </div>
      <div
        aria-label='MMAA logo'
        className='flex h-14 w-14 sm:h-20 sm:w-20 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116502/MMAA_l16096.gif)',
        }}
      ></div>
      <div
        aria-label='hapkido logo'
        className='flex h-14 w-14 sm:h-20 sm:w-20 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116614/hapkido_qetodw.gif)',
        }}
      ></div>
    </div>
  </div>
);

export default Footer;