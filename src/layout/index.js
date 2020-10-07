import React from 'react';

import Header from '../components/Header';
import InnerLayout from './InnerLayout';


const Layout = ({ children }) => (
  <>
    <Header />
    <InnerLayout>{children}</InnerLayout>
  </>
);

export default Layout;
