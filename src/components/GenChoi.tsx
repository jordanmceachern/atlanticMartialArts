import React from 'react';

const GmChoiName = 'General Choi';

const GmChoi = () => (
  <div className='w-full flex flex-col items-start sm:w-1/3 mx-0 sm:mx-2'>
    <img
      alt={GmChoiName}
      className='w-full mb-2'
      src='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1696250071/gen_choi_g4maul.gif'
    />
    <h3 className='text-sm sm:text-md flex justify-center mb-2'>
      {GmChoiName}
    </h3>
    <p className='text-xs sm:text-sm mb-1'>
      Choi Hong-hi (November 9, 1918 – June 15, 2002), was a South Korean Army general, and martial artist who
      founded the first International Federation for Tae Kwon Do (ITF).
    </p>
  </div>
)

export default GmChoi
