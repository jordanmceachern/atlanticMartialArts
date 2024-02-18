import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-tailwind/react';
import { Banner } from './Banner'
import { LoadingSpinner } from './LoadingSpinner'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export const EmailQuestionaire = () => {
  const formRef = useRef(null);
  const [personName, setName] = useState('');
  const [personLastName, setLastName] = useState('');
  const [personMessage, setPersonMessage] = useState('');
  const [personEmail, setPersonEmail] = useState('');
  const [inputError, setInputError] = useState(false);
  const [messageSent, setMessageSent] = useState<string | boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inquired, setInquired] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const person_has_inquired = 'person-has-inquired';
    
  useEffect(() => {
    if (window) {
      const hasInquired = window.localStorage.getItem(person_has_inquired);

      if (hasInquired === 'true') {
        setInquired(true);
      }
    }
  }, []);

  const setPersonHasInquired = () =>
    window?.localStorage.setItem(person_has_inquired, 'true');

  const updateValue = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const data = e.target.value;

    switch (inputName) {
      case 'personName':
        setName(data);
        break;
      case 'personLastName':
        setLastName(data);
        break;
      case 'personEmail':
        setPersonEmail(data);
        break;
      case 'personMessage':
        setPersonMessage(data);
        break;
      default:
        break;
    }
  };

  const handleError = (err) => {
    console.error(err);
    setInputError(err);
    setIsDisabled(true);
  };

  const inquire = async (e) => {
    setIsSending(true)
    e.preventDefault();

    if (!personName || !personLastName || !personEmail || !personMessage) {
      setIsSending(false);
      return;
    }

    if (inquired) {
      setIsSending(false);
      setMessageSent('You are already on our mailing list :)');
      return;
    }

    try {
      const mailerSend = new MailerSend({
        apiKey: process.env.MAILERSEND_API_KEY ?? '',
      });
      const recipients = [
        new Recipient('jormceachern@gmail.com', 'atlanticmartialarts@hotmail.com')
      ];
      const sentFrom = new Sender(personEmail, `${personName} ${personLastName}`);
      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject(`atlanticmartialarts.ca student inquiry from ${personName} ${personLastName}`)
        .setText(personMessage);

      await mailerSend.email.send(emailParams);
      setIsSending(false);
      setInputError(false);
      setMessageSent('Thank you, your inquiry has been submitted.');
      setPersonHasInquired();
    } catch (err) {
      setIsSending(false);
      handleError(err);
    }
  };

  return (
    <Banner backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1708112816/423903878_1315851262413930_6547102846014955944_n_vnpisa.jpg'>
      <form ref={formRef} onSubmit={inquire} className='bg-black/40 text-white flex flex-col p-4 items-center rounded-md'>
        <h2 className='text-sm sm:text-md md:text-base mb-4 underline'>STUDENT INQUIRY</h2>
        <div className='mb-4 grid grid-cols-1 md:gap-4 md:grid-cols-2'>
          <div className='flex flex-col col-start-1 col-end-2'>
            <input
              className='px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md'
              type='text'
              placeholder='first name'
              name='personName'
              value={personName}
              onChange={updateValue}
              minLength={3}
              required
            />
            <input
              className='px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md'
              type='text'
              placeholder='last name'
              name='personLastName'
              value={personLastName}
              onChange={updateValue}
              minLength={3}
              required
            />
            <div className='flex flex-col items-center w-full'>
              <input
                className='w-full px-8 py-2 mb-2 rounded bg-black/30 placeholder-white text-sm md:text-md'
                type='email'
                placeholder='your email'
                name='personEmail'
                value={personEmail}
                onChange={updateValue}
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
              name='personMessage'
              value={personMessage}
              onChange={updateValue}
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
            disabled={isDisabled || inquired}
          >
            {isSending && (<div className='h-4 w-4 mr-4'><LoadingSpinner /></div>)}Submit
          </Button>
        </div>
      </form>
    </Banner>
  )
}

export default EmailQuestionaire