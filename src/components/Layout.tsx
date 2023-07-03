import React from 'react';
import { Link } from 'gatsby';
import Carousel from 'react-material-ui-carousel'
import DarkMode from './DarkMode/DarkMode';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './Layout.css';

const carouselItems = [
  {
    name: 'Tae Kwon Do',
    desc: 'Man performing kick',
    src: 'https://images.squarespace-cdn.com/content/v1/5395e728e4b0be7c80fde5a6/1406136810865-WA7YMNX4JXZZ3I5RPSD7/image-asset.jpeg'
  },
  {
    name: 'Hap Ki Do',
    desc: 'Man demonstrating throwing his opponent',
    src: 'https://static.wixstatic.com/media/23b9de_5a3af7f73ecd432b912c8a1b7b34d7d9~mv2.jpg/v1/crop/x_0,y_451,w_844,h_715/fill/w_524,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/16422790_1392702457441777_15849785817728.jpg'
  }
];

const CarouselItem = ({ item }) => {
  return (
    <div className='layout-carousel-item'>
      <img src={item.src} alt={item.desc} />
      <p>{item.name}</p>
    </div>
  )
}

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

        <Carousel>
          {
            carouselItems.map((item, i) => <CarouselItem key={i} item={item} />)
          }
        </Carousel>

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
