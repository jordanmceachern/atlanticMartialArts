import React from 'react';
import PageLayout from '../components/PageLayout';

const App = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <h1 className='mx-auto my-24 h-screen'>
        404: Page Not Found
      </h1>
    </PageLayout>
  )
};

export default App;
