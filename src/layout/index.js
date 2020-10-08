import React from 'react';

import Header from '../containers/Header';
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
