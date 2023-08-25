import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const NavbarItem = ({ title, param, styles }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <Link href={`/?genre=${param}`} className={`${genre === param ? styles.navactive : ''}`}>
      {title}
    </Link>
  );
};
export default NavbarItem;
