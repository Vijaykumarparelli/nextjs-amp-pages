import React from 'react';
import MenuItem from './menu-item';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

function SiteHeader({ styles }) {
  return (
    <>
      <div className={`d-flex ${styles?.nav}`}>
        <MenuItem title="Home" link="/" Icon={AiFillHome} />
        <MenuItem title="About" link="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="d-flex items-center space-x-5">
        <Link href="/" className={styles?.logo_container}>
          <h2 className="d-flex items-center">
            <span className={styles?.logo}>IMDb</span>
            <span className="d-none d-md-block">Clone</span>
          </h2>
        </Link>
      </div>
    </>
  );
}

export default SiteHeader;
