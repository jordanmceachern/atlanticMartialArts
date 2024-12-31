import React from 'react';
import { Link } from 'gatsby';

type NavigationProps = {
  currentRoutename: string;
}

export const Navigation = ({ currentRoutename }: NavigationProps) => {
  let routeName = '';

  switch (currentRoutename) {
    case '': routeName = 'home page'; break;
    case 'fitnesscentre': routeName = 'fitness centre'; break;
    case 'grandmastermurray': routeName = 'grand master murray'; break;
    case 'taekwondo': routeName = 'tae kwon do'; break;
    case 'hapkido': routeName = 'hap ki do'; break;
    default: routeName = currentRoutename; break;
  }

  const displayedRouteName = routeName === 'home page' ? '' : routeName;

  return (
    <div className='z-20 relative flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap sm:shadow border-black border-b bg-white shadow-black dark:bg-black dark:shadow-white'>
      <input className='mobile-menu hidden' type='checkbox' id='mobile-menu' />
      <div className='w-full flex items-center sm:hidden'>
        <label className='w-10 h-full flex flex-col border-r border-black/20' htmlFor='mobile-menu' aria-label='toggle mobile navigation'>
          <hr className='flex flex-grow bg-black h-[2px] mt-2 mb-1 mx-2 rounded-sm' />
          <hr className='flex flex-grow bg-black h-[2px] my-1 mx-2 rounded-sm' />
          <hr className='flex flex-grow bg-black h-[2px] mt-1 mb-2 mx-2 rounded-sm' />
        </label>
        <div className='py-auto flex flex-grow justify-center'>
          <div
            aria-label={routeName}
            className={`${currentRoutename === '' ? 'h-4 w-16 ' : ''}-ml-10`}
            style={currentRoutename === '' ? {
              background:
                'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)',
            } : undefined}
          >
            <span className='uppercase'>
              {displayedRouteName}
            </span>
          </div>
        </div>
      </div>
      <nav className='max-w-3xl flex flex-col sm:flex-row w-full' aria-label='main menu'>
        <div className='nav-items relative opacity-0 sm:opacity-100 sm:mt-0 sm:flex sm:grow'>
          <div className='absolute mt-px sm:mt-0 bg-white dark:bg-black sm:bg-transparent sm:static z-10 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap sm:justify-evenly md:justify-between w-full'>
            <Link
              to='/'
              className={`${currentRoutename === '' ? 'bg-blue/40 ' : ''} px-1 py-1 text-sm sm:text-base w-full sm:w-auto border-black dark:active:bg-white/30 dark:hover:bg-white/20 border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              <div
                aria-label='logo'
                className='h-4 w-16 hidden sm:inline'
                style={{
                  background:
                    'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)',
                }}
              ></div>
              <span className='inline sm:hidden'>
                HOME PAGE
              </span>
            </Link>
            <Link
              to='/information'
              className={`${currentRoutename === 'information' ? 'bg-blue/40 ' : ''}px-1 py-1 text-sm sm:text-base w-full sm:w-auto border-black dark:active:bg-white/30 dark:hover:bg-white/20 border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              INFORMATION
            </Link>
            <Link
              to='/fitnesscentre'
              className={`${currentRoutename === 'fitnesscentre' ? 'bg-blue/40 ' : ''}px-1 py-1 text-sm sm:text-base w-full sm:w-auto border-black dark:active:bg-white/30 dark:hover:bg-white/20 border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              FITNESS CENTRE
            </Link>
            <Link
              to='/hapkido'
              className={`${currentRoutename === 'hapkido' ? 'bg-blue/40 ' : ''}px-1 py-1 text-sm sm:text-base w-full sm:w-auto border-black dark:active:bg-white/30 dark:hover:bg-white/20 border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              HAP KI DO
            </Link>
            <Link
              to='/taekwondo'
              className={`${currentRoutename === 'taekwondo' ? 'bg-blue/40 ' : ''}px-1 py-1 text-sm sm:text-base w-full sm:w-auto border-black dark:active:bg-white/30 dark:hover:bg-white/20 border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              TAE KWON DO
            </Link>
            <Link
              to='/kickboxing'
              className={`${currentRoutename === 'kickboxing' ? 'bg-blue/40 ' : ''}px-1 py-1 text-sm sm:text-base w-full sm:w-auto border-black dark:active:bg-white/30 dark:hover:bg-white/20 border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              KICK-BOXING
            </Link>
            <a
              aria-label='link to AMAA YouTube channel'
              className='px-2 w-full sm:w-auto border-black  border-b sm:border-0 flex justify-center items-center active:bg-slate/30 hover:bg-slate/20 dark:hover:bg-white/20'
              href='https://www.youtube.com/channel/UCc3Hz0Cq82ifmjo8W5T1RfA'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893537/qwinn/youtube_wkykc9.png' alt='link to AMAA YouTube channel' />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navigation;