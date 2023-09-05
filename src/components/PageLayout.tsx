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
  <div className='flex'>
    <div className='nav-toggle flex flex-col w-8 sm:hidden' aria-label='toggle mobile navigation'>
      <hr className='flex bg-black h-px m-1 rounded-sm' />
      <hr className='flex bg-black h-px m-1 rounded-sm' />
      <hr className='flex bg-black h-px m-1 rounded-sm' />
    </div>
    <nav className='max-w-3xl flex flex-col sm:flex-row justify-center w-full' aria-label='main menu'>
      <Link
        id='home'
        to='/'
        className='w-full sm:w-auto flex justify-center'
      >
        <div
          aria-label='logo'
          className='h-4 w-16'
          style={{
            background:
              'center / cover no-repeat url(https://wallpaperaccess.com/full/178504.jpg)',
          }}
        ></div>
      </Link>
      <div className='nav-items hidden flex-col sm:flex sm:flex-row flex-nowrap justify-self-center justify-evenly w-full'>
        <Link
          id='information'
          to='/information'
          className='px-2 w-full sm:w-auto flex justify-center'
        >
          INFORMATION
        </Link>
        <Link
          id='contact'
          to='/contact'
          className='px-2 w-full sm:w-auto flex justify-center'
        >
          CONTACT
        </Link>
        <Link
          id='hapkido'
          to='/hapkido'
          className='px-2 w-full sm:w-auto flex justify-center'
        >
          HAPKIDO
        </Link>
        <Link
          id='taekwondo'
          to='/taekwondo'
          className='px-2 w-full sm:w-auto flex justify-center'
        >
          TAEKWONDO
        </Link>
        <Link
          id='kickboxing'
          to='/kickboxing'
          className='px-2 w-full sm:w-auto flex justify-center'
        >
          KICKBOXING
        </Link>
      </div>
    </nav>
  </div>
);

const Footer = () => (
  <div className='absolute bottom-0 flex justify-center'>
    <div className='flex flex-col justify-center max-w-3xl'>
      General Inquiries
      <div className='flex'>
        <a className='px-2' href='mailto:maritimemartialarts@hotmail.com' target='_top'>
          Email Us
        </a>
        <a className='px-2' href="tel:506-440-3883">
          Phone
        </a>
      </div>
    </div>
  </div>
)

const PageLayout = ({ children }: { children?: any }) => {
  return (
    <ErrorBoundary>
      <>
        <MetaData />
        <Navigation />
        {/* <div
          style={{ background: 'center / cover no-repeat url(https://wallpaperaccess.com/full/178504.jpg)' }}
          className='h-48 absolute top-0 bottom-0 right-0 left-0 z-0'
        ></div> */}
        <div>{children}</div>
        <Footer />
      </>
    </ErrorBoundary>
  );
};

export default PageLayout;
