import React from 'react';
import { Link } from 'gatsby';

export const Navigation = () => (
  <div className='z-20 flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap shadow-black sm:shadow border-black border-b bg-white'>
    <input className='mobile-menu hidden' type='checkbox' id='mobile-menu' />
    <div className='w-full flex items-center sm:hidden'>
      <label className='w-10 h-full flex flex-col justify-self-start border-r border-black/20' htmlFor='mobile-menu' aria-label='toggle mobile navigation'>
        <hr className='flex flex-grow bg-black h-[2px] mt-2 mb-1 mx-2 rounded-sm' />
        <hr className='flex flex-grow bg-black h-[2px] my-1 mx-2 rounded-sm' />
        <hr className='flex flex-grow bg-black h-[2px] mt-1 mb-2 mx-2 rounded-sm' />
      </label>
      <Link
        id='home'
        to='/'
        className='py-2 flex flex-grow justify-center'
      >
        <div
          aria-label='logo'
          className='h-4 w-16 -ml-10'
          style={{
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)',
          }}
        ></div>
      </Link>
    </div>
    <nav className='max-w-3xl flex flex-col sm:flex-row w-full' aria-label='main menu'>
      <Link
        id='home'
        to='/'
        className='w-full py-2 hidden sm:flex sm:w-auto sm:mr-16 justify-center'
      >
        <div
          aria-label='logo'
          className='h-4 w-16'
          style={{
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)',
          }}
        ></div>
      </Link>
      <div className='nav-items hidden sm:flex grow'>
        <div className='fixed mt-px sm:mt-0 bg-white sm:bg-transparent sm:static z-50 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap justify-between w-full'>
          <Link
            to='/information'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20'
          >
            INFORMATION
          </Link>
          <Link
            to='/hapkido'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20'
          >
            HAPKIDO
          </Link>
          <Link
            to='/taekwondo'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20'
          >
            TAEKWONDO
          </Link>
          <Link
            to='/kickboxing'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20'
          >
            KICKBOXING
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default Navigation;