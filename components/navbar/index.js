import AmpNavbar from './amp-navbar';
import SiteNavbar from './nav';

const Navbar = ({ styles, isAmp }) => {
  return isAmp ? <AmpNavbar /> : <SiteNavbar styles={styles} />;
};
export default Navbar;
