import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const MetaData = () => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>Atlantic Martial Arts</title>
    <meta
      name='description'
      content='Atlantic Martial Arts formally Maritime Martial Arts Academy are located at 28 Saunders Street, Fredericton, New Brunswick. The Cultural Centre Gym (Old YMCA by exhibition ground).'
    ></meta>
    <link rel='canonical' href={process.env.SITE_URL} />
    <link href="/global.css" rel="stylesheet"></link>
  </Helmet>
);

const Navigation = () => (
  <div className='flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap shadow'>
    <div className='nav-toggle w-full flex items-center sm:hidden' aria-label='toggle mobile navigation'>
      <div className='w-8'>
        <hr className='flex bg-black shadow h-px mt-2 mb-1 mx-2 rounded-sm' />
        <hr className='flex bg-black shadow h-px my-1 mx-2 rounded-sm' />
        <hr className='flex bg-black shadow h-px mt-1 mb-2 mx-2 rounded-sm' />
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
        <div className='fixed sm:static z-10 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap justify-between w-full'>
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

const Footer = () => (
  <div className='bg-slate-800 shadow w-full py-2 flex justify-self-end justify-center'>
    <div className='w-full flex justify-center max-w-3xl'>
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
)

const PageLayout = ({ children }: { children?: any }) => {
  return (
    <ErrorBoundary>
      <>
        <div className='flex flex-col h-screen'>
          <MetaData />
          <Navigation />
          <div className='flex flex-col grow'>{children}</div>
          <Footer />
        </div>
        <script src='../path/to/flowbite/dist/flowbite.min.js'></script>
      </>
    </ErrorBoundary>
  );
};

export default PageLayout;
