import React from 'react';
import ViewMoreLess from './ViewMoreLess';

export const Belts = () => (
  <div
    className='flex flex-col h-full grow justify-start rounded-lg'
    style={{
      background:
        'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1701111480/AMAA/IMG_4996_erzw7l.jpg',
    }}
  >
    <div
      aria-label='belts description'
      className='flex flex-col bg-black/50 w-full h-full px-4 py-4 items-start justify-start rounded-lg text-white'
    >
      <h2 className='text-md md:text-base w-full flex justify-center underline mb-1'>Belt Representation</h2>
      <ViewMoreLess index={1}>
        <ul
          aria-label='list of belt colors and descriptions'
          className={`flex flex-col w-full p-4 h-full pt-auto rounded-lg items-start text-white`}
        >
          <li aria-label='white' className='bg-white text-black mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Dawn of day
          </li>
          <li aria-label='yellow' className='bg-yellow text-black mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Sun
          </li>
          <li aria-label='orange' className='bg-orange text-black mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Tiger
          </li>
          <li aria-label='green' className='bg-green mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Growth
          </li>
          <li aria-label='blue' className='bg-darkblue mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Water
          </li>
          <li aria-label='brown' className='bg-brown mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Strength
          </li>
          <li aria-label='red' className='bg-red mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Fire
          </li>
          <li aria-label='black' className='bg-slate mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            Dusk
          </li>
          <li aria-label='black' className='bg-slate mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            1st Dan: The Mountain
          </li>
          <li aria-label='black' className='bg-slate mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            2nd Dan: The Eagle
          </li>
          <li aria-label='black' className='bg-slate mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            3rd Dan: The Thunder
          </li>
          <li aria-label='black' className='bg-slate mb-1 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-md w-full flex flex-nowrap'>
            4th Dan: The Universe
          </li>
        </ul>
      </ViewMoreLess>
    </div>
  </div>
)

export default Belts
