import React from 'react'

export const ViewMoreLess = (props: any) => {
  const flip = { transform: 'rotate(180deg)' };

  return (
    <div className='flex flex-col flex-grow w-full h-full justify-center items-center'>
      {props?.title && (<h2 className='text-sm sm:text-md md:text-base w-full flex justify-center underline mb-1'>{props.title}</h2>)}
      <input className={`view-more-less-${props.index} hidden`} type='checkbox' id={`view-more-less-${props.index}`} />
      <label className={`view-more-${props.index} text-center w-full border-white/20 border-b whitespace-nowrap`} htmlFor={`view-more-less-${props.index}`} aria-label='toggle view more'>
        <div className='inline-block mr-4' style={flip}>^</div>view-more<div className='inline-block ml-4' style={flip}>^</div>
      </label>
      <div className={`view-content-${props.index} w-full flex flex-col justify-center items-start text-start`}>
        {props.children}
      </div>
      <label className={`view-less-${props.index} justify-center text-center hidden w-full border-white/20 border-t whitespace-nowrap`} htmlFor={`view-more-less-${props.index}`} aria-label='toggle view less'>
        <div className='mr-4'>^</div>view-less<div className='ml-4'>^</div>
      </label>
    </div>
  )
};

export default ViewMoreLess;