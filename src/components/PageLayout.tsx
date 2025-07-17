import React, { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Navigation from './Navigation';
import MetaData from './MetaData';
import Footer from './Footer';
import { Script } from "gatsby";

export type PageLayoutProps = {
  children: ReactNode;
  currentPathname: string;
}

export const PageLayout = ({ children, currentPathname }: PageLayoutProps) => {
  const currentRoutename = currentPathname.slice(1, currentPathname.length - 1); // to remove the "/" before every route name.
  return (
    <ErrorBoundary>
      <div className='relative flex flex-col h-fit min-h-screen text-black dark:text-white'>
        <Script src='https://cdn.jotfor.ms/agent/embedjs/019818d8e0977b8587abadeb88b971bb3caa/embed.js?skipWelcome=1&maximizable=1' />
        <MetaData />
        <Navigation currentRoutename={currentRoutename} />
        <div className='main-content z-10 flex flex-col justify-start grow overflow-y-auto bg-gray-100 dark:bg-gray-500 relative'>
          <img 
            src="https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,o_50/v1694115864/AMAA/AMAA_mpjsg0.gif"
            alt="Atlantic Martial Arts Academy Logo"
            className="absolute inset-0 w-full h-full min-h-full object-cover opacity-10 z-0 pointer-events-none"
          />
          <div className="relative z-10 flex justify-center">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default PageLayout;
