import React from 'react';
import { Link } from 'gatsby';

export const Navigation = () => (
  <div className='flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap shadow'>
    <div className='nav-toggle w-full flex items-center sm:hidden' aria-label='toggle mobile navigation'>
      <div className='w-8'>
        <hr className='flex bg-black shadow h-[2px] mt-2 mb-1 mx-2 rounded-sm' />
        <hr className='flex bg-black shadow h-[2px] my-1 mx-2 rounded-sm' />
        <hr className='flex bg-black shadow h-[2px] mt-1 mb-2 mx-2 rounded-sm' />
      </div>
      <Link
        id='home'
        to='/'
        className='w-full py-2 -ml-8 flex justify-center'
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
        <div className='fixed bg-white sm:bg-transparent sm:static z-50 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap justify-between w-full'>
          <Link
            id='information'
            to='/information'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-slate-300 hover:bg-slate-200'
          >
            INFORMATION
          </Link>
          <Link
            id='contact'
            to='/contact'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-slate-300 hover:bg-slate-200'
          >
            CONTACT
          </Link>
          <Link
            id='hapkido'
            to='/hapkido'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-slate-300 hover:bg-slate-200'
          >
            HAPKIDO
          </Link>
          <Link
            id='taekwondo'
            to='/taekwondo'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-slate-300 hover:bg-slate-200'
          >
            TAEKWONDO
          </Link>
          <Link
            id='kickboxing'
            to='/kickboxing'
            className='px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-slate-300 hover:bg-slate-200'
          >
            KICKBOXING
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default Navigation;