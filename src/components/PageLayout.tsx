import React from 'react';
import 'flowbite';
import ErrorBoundary from './ErrorBoundary';
import Navigation from './Navigation';
import Footer from './Footer';
import MetaData from './MetaData';

const PageLayout = ({ children }: { children?: any }) => {
  return (
    <ErrorBoundary>
      <div className='flex flex-col h-screen'>
        <MetaData />
        <Navigation />
        <div className='flex flex-col justify-start grow'>{children}</div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default PageLayout;
