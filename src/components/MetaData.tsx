import React from 'react';
import { Helmet } from 'react-helmet';

export const MetaData = () => (
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

export default MetaData;