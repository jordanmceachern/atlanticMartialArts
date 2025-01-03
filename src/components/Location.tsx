import React from 'react';

export const Location = () => (
  <div className='mt-3 flex items-center justify-center w-full h-[250px] sm:h-[400px]'>
    <iframe
      allowFullScreen
      className="flex w-full h-full"
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?q=28%20Saunders%20Street%2C%20Fredericton%2C%20New%20Brunswick&key=${process.env.GOOGLE_MAPS_API_KEY}`}
    />
  </div>
);

export default Location;