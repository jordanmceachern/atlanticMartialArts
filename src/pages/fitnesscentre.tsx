import React from 'react';
import PageLayout from '../components/PageLayout';
import Banner from '../components/Banner';
import MoreInformation from '../components/MoreInformation';

export const FitnessCentre = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='fitness-centre flex flex-col px-4 sm:px-6 md:px-10 grow self-center items-center justify-start w-full md:min-w-[600px] max-w-[1040px]'>
        <main className='mt-6 sm:mt-10 flex flex-col'>
          <p className='text-sm sm:text-base mb-4'>The fitness centre is currently open for use Tues 6pm - 7:30pm, Thurs 5pm - 7:30pm, and Mon/Wed/Fri 5:30pm - 8:30pm.</p>
          <p className='text-sm sm:text-base'>Pricing is $25/month or $60 for 3 months.</p>
        </main>
        <Banner
          title='squat rack, multi-level weight bench, treadmill, bowflex, chest compression machine for pectorals muscles, and various handheld weights and equipment.'
          className='hidden sm:flex mt-4 sm:mt-6 md:mt-10 h-[200px] md:h-[500px] sm:h-92 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,c_crop,w_1716,h_780/v1735918847/AMAA/Screenshot_2025-01-03_at_11.39.51_AM_cmmzjk.png'
        />
        <Banner
          title='pull-up bar / hanging leg raises frame, bench press, three exercise bicycles, and barbells.'
          className='hidden sm:flex mt-4 sm:mt-6 md:mt-10 h-[200px] md:h-[500px] sm:h-92 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,c_crop,w_1716,h_780/v1735918847/AMAA/Screenshot_2025-01-03_at_11.39.59_AM_qagkm8.png'
        />
        <Banner
          title='squat rack, multi-level weight bench, treadmill, bowflex, various handheld weights and equipment.'
          className='sm:hidden mt-4 sm:mt-6 md:mt-10 h-[200px] md:h-[500px] sm:h-92 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,c_crop,w_1172,h_780/v1735918846/AMAA/Screenshot_2025-01-03_at_11.39.11_AM_acs9oq.png'
          />
        <Banner
          title='chest compression machine for pectorals muscles, pull-up bar / hanging leg raises frame, bench press.'
          className='sm:hidden mt-4 sm:mt-6 md:mt-10 h-[200px] md:h-[500px] sm:h-92 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,c_crop,w_1172,h_780/v1735918846/AMAA/Screenshot_2025-01-03_at_11.39.22_AM_unmcbu.png'
          />
        <Banner
          title='three exercise bicycles.'
          className='sm:hidden mt-4 sm:mt-6 md:mt-10 h-[200px] md:h-[500px] sm:h-92 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto,c_crop,w_1172,h_780/v1735918847/AMAA/Screenshot_2025-01-03_at_11.39.31_AM_phuuzi.png'
        />
        <Banner
          title='two super heavy bags, one regular heavy bag, and two skinny heavy bags.'
          className='my-4 sm:my-6 md:my-10 h-36 md:h-80 w-full'
          backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/AMAA/newbags_ghlrvj.jpg'
        />
        <MoreInformation className='w-full mb-4 sm:mb-6 md:mb-10' />
      </div>
    </PageLayout>
  )
};

export default FitnessCentre;
