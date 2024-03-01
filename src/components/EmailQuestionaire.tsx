import React, { useState, useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import { Banner } from './Banner'
import { LoadingSpinner } from './LoadingSpinner'
import { useForm } from '@formspree/react';

export const EmailQuestionaire = () => {
  const [inputError, setInputError] = useState(false);
  const [messageSent, setMessageSent] = useState<string | boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inquired, setInquired] = useState(false);
  
  const [formState, handleSubmit] = useForm('mqkrbazg');
  const person_has_inquired = 'person-has-inquired';
    
  useEffect(() => {
    if (window) {
      const hasInquired = window.localStorage.getItem(person_has_inquired);

      if (hasInquired === 'true') {
        setInquired(true);
      }
    }
  }, []);

  const cachePersonHasInquired = () => {
    setInquired(true);
    window?.localStorage.setItem(person_has_inquired, 'true');
  }

  const handleError = (err) => {
    console.error(err);
    setInputError(err);
    setIsDisabled(true);
  };

  const inquire = (submitEvent) => {
    submitEvent.preventDefault();

    try {
      handleSubmit(submitEvent);
      cachePersonHasInquired();
    } catch (err) {
      handleError(err);
    }
  };

  if (formState.errors && !inputError) {
    handleError(formState.errors);
  }

  if (formState.succeeded && !messageSent) {
    setMessageSent('Thank you, your inquiry has been submitted.');
  }

  return (
    <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1709314082/pushups_wflq0c.jpg'>
      <form onSubmit={inquire} className='bg-black/40 text-white flex flex-col p-4 items-center rounded-md'>
        <h2 className='text-sm sm:text-md md:text-base mb-4 underline'>STUDENT INQUIRY</h2>
        <div className='mb-4 grid grid-cols-1 md:gap-4 md:grid-cols-2'>
          <div className='flex flex-col col-start-1 col-end-2'>
            <input
              className='px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md'
              type='text'
              placeholder='first name'
              name='First name:' // Text that is displayed as header in sent email
              minLength={3}
              required
            />
            <input
              className='px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md'
              type='text'
              placeholder='last name'
              name='Last name:' // Text that is displayed as header in sent email
              minLength={3}
              required
            />
            <div className='flex flex-col items-center w-full'>
              <input
                className='w-full px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md'
                type='email'
                placeholder='your email'
                name='Email address:' // Text that is displayed as header in sent email
                minLength={9}
                required
              />
              <p className='mb-2 md:mb-0 text-xs text-white'>(Your email will only be used for responding to your inquiry)</p>
            </div>
          </div>
          <div className='col-start-1 col-end-2 md:col-start-2 md:col-end-3 flex flex-col'>
            <label htmlFor='email_message' className='mb-2 text-sm md:text-md text-white'>
              Have you trained in martial arts before? Which arts are you interested in at AMMA?
            </label>
            <textarea
              id='email_message'
              className='flex flex-grow min-h-[120px] px-8 py-2 rounded bg-black/30 placeholder-white resize-none text-sm md:text-md'
              placeholder='enter your message'
              name='Message:' // Text that is displayed as header in sent email
              minLength={9}
              maxLength={500}
              required
            />
          </div>
        </div>
        <div className='flex flex-col items-center '>
          {
            (inputError || messageSent) && (
              <div className='max-w-[200px] bg-black/30 py-2 px-4 mb-4 rounded-lg text-sm sm:text-md'>
                {inputError && <p className='text-red'>{`${inputError}`}</p>}
                {messageSent && <p>{messageSent}</p>}
              </div>
            )
          }
          <Button
            className='flex items-center'
            type='submit'
            value='subscribe'
            disabled={isDisabled || inquired || formState.submitting}
          >
            {formState.submitting && (<div className='h-4 w-4 mr-4'><LoadingSpinner /></div>)}Submit
          </Button>
        </div>
      </form>
    </Banner>
  )
}

export default EmailQuestionaire