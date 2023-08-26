import { memo } from 'react';
import SiteHeader from './header';
import AmpHeader from './amp-header';

const Header = ({ styles, isAmp }) => {
  // const isAmp = useAmp();
  return (
    <>
      <div className="d-flex items-center justify-between py-2">
        {isAmp ? <AmpHeader /> : <SiteHeader styles={styles} />}
      </div>
    </>
  );
};
export default memo(Header);
