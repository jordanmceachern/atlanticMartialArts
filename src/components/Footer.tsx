import React from 'react';

export const Footer = () => (
  <div className='bg-slate-800 shadow w-full py-2 flex justify-self-end justify-center'>
    <div className='w-full flex justify-center items-center max-w-3xl'>
      <div
        aria-label='taekwondo logo'
        className='hidden sm:flex h-16 w-16 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116623/taekwondo_nly8vx.gif)',
        }}
      ></div>
      <div
        aria-label='MMAA logo'
        className='hidden sm:flex h-16 w-16 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)',
        }}
      ></div>
      <div className='flex mb-1 flex-col justify-center text-white text-sm sm:text-base max-w-3xl'>
        General Inquiries
        <div className='flex flex-col justify-center'>
          <a className='px-2 my-1 flex justify-center text-white text-xs sm:text-sm hover:bg-slate-600' href='mailto:maritimemartialarts@hotmail.com' target='_top'>
            Email Us
          </a>
          <a className='px-2 flex justify-center text-white text-xs sm:text-sm hover:bg-slate-600' href="tel:506-440-3883">
            Phone
          </a>
        </div>
      </div>
      <div
        aria-label='AMMA logo'
        className='hidden sm:flex h-16 w-16 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116502/MMAA_l16096.gif)',
        }}
      ></div>
      <div
        aria-label='hapkido logo'
        className='hidden sm:flex h-16 w-16 mx-2'
        style={{
          background:
            'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694116614/hapkido_qetodw.gif)',
        }}
      ></div>
    </div>
  </div>
);

export default Footer;