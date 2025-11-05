import React from 'react';
import PageLayout from '../components/PageLayout';

export const App = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <main>
        <h1 className='mx-auto my-24 h-screen'>
          404: Page Not Found
        </h1>
      </main>
    </PageLayout>
  )
};

export default App;
