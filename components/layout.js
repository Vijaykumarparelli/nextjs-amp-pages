import React from 'react';
import Header from './header';
import Navbar from './navbar';
import styles from '@/styles/layout.module.scss';
import { useAmp } from 'next/amp';
import { ampStyles } from '@/styles/amp-styles';

function Layout({ children }) {
  const isAmp = useAmp();
  return (
    <>
      <div>
        <div className="container">
          <Header styles={styles} isAmp={isAmp} />
        </div>
        <Navbar styles={styles} isAmp={isAmp} />
        {children}
      </div>
      {isAmp && (
        <style jsx global>
          {ampStyles}
        </style>
      )}
    </>
  );
}

export default Layout;
