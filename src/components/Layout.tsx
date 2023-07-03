import React from 'react';
import { Link } from 'gatsby';
import DarkMode from './DarkMode/DarkMode';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './Layout.css';

const Layout = ({ children }: { children?: any }) => {
  const toggleHandler = () => {
    const navhtml = document.getElementsByClassName('mobile');
    const navArr = Array.from(navhtml);
    navArr.forEach((element) => element.classList.toggle('hideThis'));
  };
  return (
    <ErrorBoundary>
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Atlantic Martial Arts</title>
          <meta
            name='description'
            content='Atlantic Martial Arts formally Maritime Martial Arts Academy are located at 28 Saunders Street, Fredericton, New Brunswick. The Cultural Centre Gym (Old YMCA by exhibition ground).'
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
              {`[MMAA Logo]`}
              <div
                className='mmaalink'
              // style={{
              //   background:
              //     'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)',
              // }}
              ></div>
            </Link>
          </div>
          <Link
            id='about'
            className='heading mobile hideThis'
            to='/about'
            onClick={toggleHandler}
          >
            ABOUT
          </Link>
          <Link
            id='contact'
            className='heading mobile hideThis'
            to='/contact'
            onClick={toggleHandler}
          >
            CONTACT
          </Link>
          <Link
            id='hapkido'
            className='heading mobile hideThis'
            to='/hapkido'
            onClick={toggleHandler}
          >
            HAPKIDO
          </Link>
          <Link
            id='taekwondo'
            className='heading mobile hideThis'
            to='/taekwondo'
            onClick={toggleHandler}
          >
            TAEKWONDO
          </Link>
          <DarkMode />
        </nav>

        <div
          className='background'
          style={{
            background: `center / cover no-repeat url(https://https://wallpaperaccess.com/full/178504.jpg)`,
            // background: `center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675637511/qwinn/qwinn_awmtfe.jpg)`,
          }}
        ></div>

        <div className='App'>{children}</div>

        <div id='footer'>
          General Inquiries
          <div className='footer-container'>
            <a href='mailto:maritimemartialarts@hotmail.com' target='_top'>
              Email Us
            </a>
            <a href="tel:506-440-3883">
              Phone
            </a>
          </div>
        </div>
      </>
    </ErrorBoundary>
  );
};

export default Layout;
