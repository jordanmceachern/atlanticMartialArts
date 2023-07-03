import React from 'react';
import { Link } from 'gatsby';
import DarkMode from './darkMode/darkMode';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './errorBoundary/errorBoundary';
import './layout.css';

const Layout = ({ children }) => {
  const toggleHandler = () => {
    const navhtml = document.getElementsByClassName('mobile');
    const navArr = Array.from(navhtml);
    navArr.forEach((element) => element.classList.toggle('hideThis'));
  };
  return (
    <ErrorBoundary>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Qwinn</title>
        <meta
          name='description'
          content='Britt McQuinn (qwinn) is an award-winning Canadian East Coast
            singer/songwriter. Her early musical influences of film and video game
            soundtracks have shaped the synth-pop sound that audiences know today.
            Britt identifies as queer and a mental health advocate. She captivates
            Crowds with a magnetic, warm and engaging stage presence. She&#39;s opened
            for k.d. lang during her 25th Anniversary Ingénue Tour, Milk & Bone,
            Neon Dreams, and Ria Mae, between her solo act and her dark pop duo,
            bleum. She performed for the recent World Junior Hockey Championships.
            Britt participates in songwriting camps and thrives in the co-writing
            environment. Notable past camps include Music PEI Canadian Song
            Challenge and CREATE Nordic Bridges Song Camp in Toronto. Qwinn&#39;s song
            Welcome to My Life landed a sync placement on Netflix&#39;s Ginny &
            Georgia. She has songs on several Spotify editorial playlists,
            including It&#39;s a Bop, Fresh Finds Pop, New Music Friday Canada, and
            Bangers. Qwinn has label releases on Circus Records, Kiwi Bear
            Records, and Monstercat.'
        ></meta>
        <link rel='canonical' href={process.env.SITE_URL} />
      </Helmet>
      <nav>
        <div className='heading'>
          <div id='hamburger' onClick={toggleHandler}>
            <hr />
            <hr />
            <hr />
          </div>
          <Link id='home' to='/'>
            <div
              className='qwinnlink'
              style={{
                background:
                  'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)',
              }}
            ></div>
          </Link>
        </div>
        <Link
          id='bio'
          className='heading mobile hideThis'
          to='/bio'
          onClick={toggleHandler}
        >
          BIO
        </Link>
        <Link
          id='lyrics'
          className='heading mobile hideThis'
          to='/lyrics'
          onClick={toggleHandler}
        >
          LYRICS
        </Link>
        <a
          aria-label='link to shopify store'
          className='heading mobile hideThis'
          href='https://qwinnmerch.myshopify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          MERCH
        </a>
        <Link
          id='subscribe'
          className='heading mobile hideThis'
          to='/subscribe'
          onClick={toggleHandler}
        >
          SUBSCRIBE
        </Link>
        <Link
          id='contact'
          className='heading mobile hideThis'
          to='/contact'
          onClick={toggleHandler}
        >
          CONTACT
        </Link>
        <DarkMode />
      </nav>

      <div
        className='background'
        style={{
          background: `center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675637511/qwinn/qwinn_awmtfe.jpg)`,
        }}
      ></div>

      <div className='App'>{children}</div>

      <div id='footer'>
        <div className='links-container'>
          {[
            {
              href: 'https://music.apple.com/ca/artist/qwinn/1541048283',
              name: 'apple music',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893495/qwinn/appleMusic_qjfxem.png',
            },
            {
              href: 'https://soundcloud.com/qwinncreates',
              name: 'soundcloud',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893519/qwinn/soundcloud_h67ltj.png',
            },
            {
              href: 'https://discord.gg/tgHrxVUEJA',
              name: 'discord',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893498/qwinn/discord_rz5g84.png',
            },
            {
              href: 'https://open.spotify.com/artist/7LUgWAmGi0JiTUGtskeLd5?si=UaU6zM4XRkab4uhEG_2gCg',
              name: 'spotify',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893525/qwinn/spotify_rgagnv.png',
            },
            {
              href: 'https://www.tiktok.com/@qwinncreates?lang=en',
              name: 'tiktok',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893529/qwinn/tiktok_uoilxa.png',
            },
            {
              href: 'https://facebook.com/qwinncreates',
              name: 'facebook',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675894655/qwinn/facebook_hlfrkh.png',
            },
            {
              href: 'https://www.instagram.com/brittanymcquinn/?hl=en',
              name: 'instagram',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893504/qwinn/instagram_kxgg9b.png',
            },
            {
              href: 'https://twitter.com/brittanymcquinn',
              name: 'twitter',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893533/qwinn/twitter_mhizj5.png',
            },
            {
              href: 'https://www.youtube.com/user/BrittanyMcQuinn',
              name: 'youtube',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893537/qwinn/youtube_wkykc9.png',
            },
            {
              href: 'https://qwinnmerch.myshopify.com/',
              name: 'shopify',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893515/qwinn/shopify_hxvb5t.png',
            },
          ].map(({ href, name, src }) => (
            <div className='links'>
              <a href={href} target='_blank' rel='noopener noreferrer'>
                <img id={name} src={src} alt={`link to ${name}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
