import NavbarItem from './navbar-item';

const Navbar = ({ styles }) => {
  return (
    <div className={`d-flex justify-center ${styles.navbar}`}>
      <NavbarItem title="Trending" param="fetchTrending" styles={styles} />
      <NavbarItem title="Top Rated" param="fetchTopRated" styles={styles} />
    </div>
  );
};
export default Navbar;
