import React from 'react';
import Header from './header';
import Navbar from './navbar';
import styles from '@/styles/layout.module.scss';
function Layout({ children }) {
  return (
    <div>
      <div className="container">
        <Header styles={styles} />
      </div>
      <Navbar styles={styles} />
      {children}
    </div>
  );
}

export default Layout;
