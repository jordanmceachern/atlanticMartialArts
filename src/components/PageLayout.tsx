import React, { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Navigation from './Navigation';
import Footer from './Footer';
import MetaData from './MetaData';

type PageLayoutProps = {
  children: ReactNode;
  currentPathname: string;
}

const PageLayout = ({ children, currentPathname }: PageLayoutProps) => {
  const currentRoutename = currentPathname.slice(1, currentPathname.length - 1); // to remove the "/" before every route name.
  return (
    <ErrorBoundary>
      <div className='relative flex flex-col h-screen'>
        <MetaData />
        <Navigation currentRoutename={currentRoutename} />
        <div
          className='z-0 absolute inset-0 opacity-10'
          style={{
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif)'
          }}
        />
        <div className='main-content z-10 flex flex-col justify-start grow overflow-y-auto'>
          {children}
        </div>
        <Footer />
      </div>
    </ErrorBoundary >
  );
};

export default PageLayout;
