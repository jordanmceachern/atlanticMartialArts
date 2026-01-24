import React from 'react';
import { Banner } from './Banner';

const faqs = [
  {
    question: "Do I need any prior experience?",
    answer: "No prior experience is necessary. We welcome students of all levels, from complete beginners to advanced practitioners."
  },
  {
    question: "What should I wear to my first class?",
    answer: "For your first class, wear whatever athletic clothing is comfortable for you. Aside from kick boxing, students will eventually need to purchase a uniform for their respective art. Change rooms are available on site."
  },
  {
    question: "Do I have to be flexible for Tae Kwon Do or Kick boxing?",
    answer: "No, there are no expectations for new students, but over time they will develop and/or improve flexibility with consistent training. Flexibility is important for developing proper technique and preventing injury."
  },
  {
    question: "Are there testing fees?",
    answer: "Yes, there are $50 testing fees for belt promotions."
  },
  {
    question: "Is there sparring?",
    answer: "Yes, sparring is included in our curriculums for each art taught. Students can borrow protective gear from the academy but are encouraged to purchase their own. Equipment can be purchased from the academy or elsewhere (following safety clearance by Master Ross).",
  },
  {
    question: "If I get injured during training, do I have any coverage?",
    answer: "Yes, all students are covered by World Kubudo's insurance provider for the annual fee of $60."
  },
  {
    question: "What happens in a typical class?",
    answer: "What students will do in a typical class varies per day as well as the instructors plans. Generally, classes will begin with a warm-up, followed by some drills, then techniques for their belt level, and finalized with some other activity (such as self-defense, sparring, grappling, etc)."
  },
  {
    question: "Does the academy compete or go to any tournaments?",
    answer: "Yes, the academy has a long history of competing in tournaments for both Tae Kwon Do and Kick boxing. If students are interested, that is something they can discuss with Master Ross."
  }
];

export const FAQ = () => {

  return (
    <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/AMAA/pushups_wflq0c.jpg'>
      <div className='bg-black/40 text-white flex flex-col p-4 rounded-md'>
        <h2 className='text-sm sm:text-md md:text-base mb-4 underline text-center'>FREQUENTLY ASKED QUESTIONS</h2>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='space-y-2'>
              <p className='text-xs sm:text-sm md:text-md font-semibold'>
                {faq.question}
              </p>
              <p className='text-xs sm:text-sm md:text-md pl-4'>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Banner>
  );
};

export default FAQ;
