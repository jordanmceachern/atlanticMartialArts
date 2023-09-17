import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Navigation from './Navigation';
import Footer from './Footer';
import MetaData from './MetaData';

const PageLayout = ({ children }: { children?: any }) => {
  return (
    <ErrorBoundary>
      <div className='relative flex flex-col h-screen'>
        <MetaData />
        <Navigation />
        <div
          className='z-0 absolute inset-0 opacity-5'
          style={{
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)'
          }}
        />
        <div className='z-10 flex flex-col justify-start grow overflow-y-scroll'>
          {children}
        </div>
        <Footer />
      </div>
    </ErrorBoundary >
  );
};

export default PageLayout;
