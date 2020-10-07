import React from 'react';

import Header from '../components/Header';
import InnerLayout from './InnerLayout';
import Footer from '../components/Footer';


const Layout = ({ children }) => (
  <>
    <Header />
    <InnerLayout>{children}</InnerLayout>
    <Footer />
  </>
);

export default Layout;
