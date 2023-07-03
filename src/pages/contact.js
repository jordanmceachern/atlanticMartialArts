import React from 'react';
import '../components/css_pages/contact.css';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <div id='contactInfo'>
        <div>
          <p id='contactLinkContainer'>
            <a href='mailto:brittanymcquinn@gmail.com' target='_top'>
              General Inquiries
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
