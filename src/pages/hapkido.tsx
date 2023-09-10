import React from 'react';
import PageLayout from '../components/PageLayout';

const Hapkido = () => {
  return (
    <PageLayout>
      <div className='flex flex-col'>
        <h1>Home of the Canadian HapKiDo Association</h1>
        <div
          aria-label='Canadian HapKiDo Association Logo'
          className='h-32 w-32'
          style={{
            background:
              'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1694270488/hapkidoLogo_pupiah.gif)',
          }}
        ></div>
        <p>
          <strong>Hapkido:</strong> meaning "way of coordinated energy"
        </p>
        <p>
          A grappling art more complete than Tae Kwon Do because it employs throws, pressure points, joint locks, ground work, as well as striking with the hands and feet.
          Hapkido is an excellent form of self defense: Students will learn a very wide range of self defense techniques.
        </p>
        <p>
          Students will learn the traditional form of the art as passed down from the founder Choi Yung Sool, to Grandmaster Chung Kee Tae, and from him to Master Murray.
        </p>
      </div>
    </PageLayout>
  );
};

export default Hapkido;
