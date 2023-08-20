import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import '../styles/global.css';

const Layout = ({ children }: { children?: any }) => {
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
            <div id='hamburger'>
              <hr />
              <hr />
              <hr />
            </div>
            <Link id='home' to='/'>
              {`[MMAA Logo]`}
              <div className='mmaalink'
              // style={{
              //   background:
              //     'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)',
              // }}
              ></div>
            </Link>
          </div>
          <Link
            id='information'
            to='/information'
          >
            INFORMATION
          </Link>
          <Link
            id='contact'
            to='/contact'
          >
            CONTACT
          </Link>
          <Link
            id='hapkido'
            to='/hapkido'
          >
            HAPKIDO
          </Link>
          <Link
            id='taekwondo'
            to='/taekwondo'
          >
            TAEKWONDO
          </Link>
          <Link
            id='kickboxing'
            to='/kickboxing'
          >
            KICKBOXING
          </Link>
        </nav>

        <div
          style={{
            background: `center / cover no-repeat url(https://https://wallpaperaccess.com/full/178504.jpg)`
          }}
        ></div>

        <div className='App'>{children}</div>

        <div id='footer'>
          General Inquiries
          <div>
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
