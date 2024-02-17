import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-tailwind/react';
import { Banner } from './Banner'
import { LoadingSpinner } from './LoadingSpinner'
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.GATSBY_API_KEY ?? '',
});

const sentFrom = new Sender("jordan@atlanticmartialarts.ca", "Your name");

const recipients = [
  new Recipient("jormceachern@gmail.com", "Your Client")
];

// const client = new SMTPClient({
//   user: 'MS_Mh4DSR@atlanticmartialarts.ca', // username for logging into smtp
//   password: 'VzZwvRjpNwWUPrwO', // password for logging into smtp
//   host: 'smtp.mailersend.net', // smtp host (defaults to 'localhost')
//   ssl: true, // boolean or object (if true or object, ssl connection will be made)
//   port: 587, // smtp port (defaults to 25 for unencrypted, 465 for `ssl`, and 587 for `tls`)
//   domain: 'atlanticmartialarts.ca', // domain to greet smtp with (defaults to os.hostname)
//   tls: true // boolean or object (if true or object, starttls will be initiated)
//   // timeout, // max number of milliseconds to wait for smtp responses (defaults to 5000)
//   // authentication, // array of preferred authentication methods ('PLAIN', 'LOGIN', 'CRAM-MD5', 'XOAUTH2')
//   // logger // override the built-in logger (useful for e.g. Azure Function Apps, where console.log doesn't work)
// });

export const EmailQuestionaire = () => {
  const formRef = useRef(null);
  const [personName, setName] = useState('');
  const [personLastName, setLastName] = useState('');
  const [personMessage, setPersonMessage] = useState('');
  const [personEmail, setEmail] = useState('');
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
        setEmail(data);
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
    console.log('reached 5')

    if (!personName || !personLastName || !personEmail) {
      console.log('reached 4')
      setIsSending(false);
      return;
    }
    console.log('reached 3')

    if (inquired) {
      console.log('reached 2')
      setIsSending(false);
      setMessageSent('You are already on our mailing list :)');
      return;
    }

    try {
      console.log('reached')
      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("This is a Subject")
        .setHtml("<strong>This is the HTML content</strong>")
        .setText("This is the text content");

      const message = await mailerSend.email.send(emailParams);
      console.log('message test: ', message)
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
    <Banner className='bg-black/40' backgroundImage='https://res.cloudinary.com/dtweazqf2/image/upload/f_auto,q_auto/v1708112816/423903878_1315851262413930_6547102846014955944_n_vnpisa.jpg'>
      <form ref={formRef} onSubmit={inquire} className='flex flex-col m-4'>
        <div className='text-white mb-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex flex-col col-start-1 col-end-2'>
            <input
              className='px-8 py-2 mb-2 rounded bg-white/20 placeholder-white'
              type='text'
              placeholder='first name'
              name='personName'
              value={personName}
              onChange={updateValue}
              minLength={3}
              required
            />
            <input
              className='px-8 py-2 mb-2 rounded bg-white/20 placeholder-white'
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
                className='w-full px-8 py-2 mb-2 rounded bg-white/20 placeholder-white'
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
            <label htmlFor='email_message' className='mb-2 text-sm text-white'>
              Have you trained in martial arts before? Which arts are you interested in at AMMA?
            </label>
            <textarea
              id='email_message'
              className='flex flex-grow px-8 py-2 rounded bg-white/20 placeholder-white'
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
          <div className='max-w-[200px] bg-black/40 py-2 px-4 mb-4 rounded-lg'>
            {inputError && <p className='text-red'>{`${inputError}`}</p>}
            {messageSent && <p>{messageSent}</p>}
          </div>
          <Button
            className='flex items-center'
            type='submit'
            value='subscribe'
            disabled={isDisabled}
          >
            {isSending && (<div className='h-4 w-4 mr-4'><LoadingSpinner /></div>)}Submit
          </Button>
        </div>
      </form>
    </Banner>
  )
}

export default EmailQuestionaire