import React from 'react';
import ViewMoreLess from './ViewMoreLess';

export const TaeKwonDoDescription = () => (
  <div
    className='flex flex-col grow h-full justify-start rounded-lg'
    style={{
      background:
        'top / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1701109336/AMAA/IMG_5008_s4hv3k.jpg',
    }}
  >
    <div
      aria-label='tae kwon do description'
      className='flex flex-col bg-black/50 w-full h-full px-4 py-4 items-start justify-start rounded-lg text-white'
    >
      <ViewMoreLess index={0} title='Tae Kwon Do'>
        <p className='text-sm md:text-md w-full justify-center flex flex-nowrap mb-3'>
          ~ hand and foot fighting ~
        </p>
        <p className='mb-2 text-sm md:text-md'>
          In contrast to Hap Ki Do, Tae Kwon Do focuses primarily on punching and kicking, and has a large repertoire of kicks that can be thrown from all different angles.
          Self-defense is also developed, again emphasizing on kicks and punches to directly repel opponents.
          A variety of patterns and forms are taught, designed to reinforce the blocks and strikes learned in class by combining them into choreographed movements.
          As students progress through the "ranks", increasingly complex forms are introduced.
          Students will learn the traditional art as developed by General Choi, and passed to Grandmaster Chung Kee Tae, who in turn passed it on to Master Murray.
        </p>
        <p className='mb-2 text-sm md:text-md'>
          * Note: The Martial Art of Tae Kwon Do, not the sport, is instructed here.
        </p>
        <p className='mb-2 text-sm md:text-md'>
          Tae Kwon Do should only be used in self-defense, or to defend 'the just or weak'. Tae Kwon Do is not only for the strong; any person wishing to master the art can do so:
          young or old, male or female, big or small.
        </p>
        <p className='text-sm md:text-md'>
          Translated from Korean, "Tae" (t'ae) literally means to jump, kick or smash with the foot. "Kwon" denotes a fist - chiefly to punch or destroy with the hand or fist.
          "Do" means an art, or way or method. Thus taken collectively, Tae Kwon Do Indicates the technique of unarmed combat for self-defense involving the skilled application of
          punches, kicks, blocks, dodges and interceptions with the hands, arms and feet. Even if Tae Kwon Do Is practiced for the sake of exercise alone, the enjoyment derived
          will justify the time invested and spent. As an exercise, it is equally suitable for the old and young.
        </p>
      </ViewMoreLess>
    </div>
  </div>
)

export default TaeKwonDoDescription
